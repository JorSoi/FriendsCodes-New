import { generateCodeConversionHTML } from "@/supabase/templates/referral-conversions";
import { createClient } from "@/utils/supabase/server";
import verifyAPIRequest from "@/utils/verifyAPIRequest";
import { PostgrestError } from "@supabase/supabase-js";
import { NotificationResults } from "@/types/general.types";
import getEnvRootURL from "@/utils/getEnvRootURL";

export const GET = async (req: Request) => {
  const supabase = await createClient();

  const { verified, details } = verifyAPIRequest(req);
  if (!verified)
    return Response.json(
      { message: `Unauthorized: ${details}` },
      { status: 401 },
    );

  try {
    // 🧑‍💻 Fetch eligible profiles
    const { data: eligibleProfiles, error: profilesError } = await supabase
      .from("profiles")
      .select(`*, notifications_recipient_fkey!inner(*)`)
      .eq("notifications_recipient_fkey.type", "code_interaction")
      .eq("notifications_recipient_fkey.email_delivered", false)
      .eq("email_preferences->>referral_conversions", "true");

    if (profilesError as PostgrestError) {
      return Response.json(
        { message: `Database error: ${profilesError?.message}` },
        { status: 502 },
      );
    }

    if (!eligibleProfiles || eligibleProfiles.length === 0) {
      return Response.json({
        message: "No eligible code conversions detected.",
      });
    }

    const notificationResults: NotificationResults = [];

    // ⏳ Sequential processing
    for (const profile of eligibleProfiles) {
      try {
        const { data: convertedReferrals, error: referralError } =
          await supabase.rpc("retrieve_referrals_for_email_notification", {
            user_id: profile.id,
          });

        if (referralError || convertedReferrals.length === 0) {
          notificationResults.push({
            user: profile.user_name,
            status: "error",
            error:
              referralError?.message ??
              "Detected undelivered conversion notifications. However those are stale conversion notifications (older than 24h). This happens, when user deactivates the email_preference and reactivates it at a later time leaving intentionally undelivered codes that should not be considered for the latest email notification delivery.",
          });
          continue;
        }

        // Deliver email
        const res = await fetch(`${getEnvRootURL()}/api/mail/send`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: profile.email,
            subject: `Your "${convertedReferrals[0].name}" referral was just used by someone!`,
            html: generateCodeConversionHTML(convertedReferrals, profile),
          }),
        });
        if (!res.ok) {
          notificationResults.push({
            user: profile.user_name,
            status: "error",
            error: "Error while delivering email",
          });
          continue;
        }

        //Update email_delivery status on notification records for that user
        await supabase
          .from("notifications")
          .update({ email_delivered: true })
          .eq("recipient", profile.id)
          .eq("type", "code_interaction")
          .eq("email_delivered", false);

        notificationResults.push({
          user: profile.user_name,
          status: "success",
          convertedReferrals,
        });
      } catch (err) {
        notificationResults.push({
          user: profile.user_name,
          status: "error",
          error: `Unexpected error: ${err}`,
        });
      }
    }

    return Response.json({
      message: "Processing complete",
      notificationResults,
    });
  } catch (err) {
    return Response.json({ message: `Server error: ${err}` }, { status: 500 });
  }
};

import { createClient } from "@/utils/supabase/server";

async function page() {
  const supabase = await createClient();

  // Retrieve all users who are eligible to receive a new notification email
  const { data: profilesEligibleForMail, error } = await supabase
    .from("profiles")
    .select(`*, notifications_recipient_fkey!inner(*)`)
    .eq("notifications_recipient_fkey.type", "code_interaction")
    .eq("notifications_recipient_fkey.email_delivered", false)
    .eq("email_preferences->>referral_conversions", "true");

  if (!error && profilesEligibleForMail.length > 0) {
    //Retrieve the respective referrals to populate the email with
    profilesEligibleForMail.forEach(async (profile) => {
      const { data: referralsAffected, error: usercodeError } =
        await supabase.rpc("retrieve_referrals_for_email_notification", {
          user_id: profile.id,
        });

      if (!usercodeError) {
        console.log(
          `${profile.user_name} is eligible to receive an email because his referral conversion email preference is "${profile.email_preferences.referral_conversion}". Here are the converted codes that the user has not received an email about: `,
          referralsAffected,
        );
      } else {
        console.log(usercodeError);
      }
    });
  }

  return <div>Enter</div>;
}

export default page;

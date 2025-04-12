import { createClient } from "@/utils/supabase/server";

export const GET = async (req: Request) => {
  const supabase = await createClient();
  const authHeader = req.headers.get("authorization");
  const verified =
    authHeader &&
    authHeader.startsWith("Bearer ") &&
    authHeader.split(" ")[1] === process.env.API_ACCESS_TOKEN;
  // Check if bearer token is correct, only then continue
  if (!verified) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("notifications")
    .select(
      `*, profiles: recipient(email_preferences)`,
    )
    .eq("email_delivered", false)
    .eq("type", "code_interaction")
    .eq('recipient.email_preferences -> referral_conversions', true)

  if (!error) {
    console.log(data);
  } else {
    console.log(error);
  }

  console.log("request received");
  return Response.json({ message: "request received" });
};

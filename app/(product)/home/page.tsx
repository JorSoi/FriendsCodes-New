import CodeContainer from "@/components/Global/CodeContainer";
import CodeList from "@/components/Product/my-codes/CodeList";
import EmptyState from "@/components/Product/my-codes/EmptyState";
import ShareProfile from "@/components/Product/my-codes/ShareProfile";
import Tab from "@/components/Product/Tab";
import { sendAuthSlackMessage } from "@/lib/sendAuthSlackMessage";
import { Tables } from "@/types/database.types";
import { UserCodeWithRelations } from "@/types/general.types";
import { generateUniqueProfileName } from "@/utils/generateUniqueProfileName";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";
import { compareDesc } from "date-fns";

async function Page() {
  let userCodes: UserCodeWithRelations[] | null = [];
  const supabase = await createClient();
  const { user, profile } = await getServerProfile();

  if (user) {
    const { data } = await supabase
      .from("user_codes")
      .select(`*, companies(*)`)
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    // Sort general data to display pinned referrals first and the rest after
    const pinnedCodes = (data?.filter((code) => !!code.pinned_at) || []).sort(
      (a: Tables<"user_codes">, b: Tables<"user_codes">) =>
        compareDesc(new Date(a.pinned_at!), new Date(b.pinned_at!)),
    );
    const remainingCodes = data?.filter((userCodes) => !!!userCodes.pinned_at);

    userCodes = [...(pinnedCodes || []), ...(remainingCodes || [])];

    //Automatically generate username when being redirected here after oAuth registration.
    if (!profile?.user_name && user.email) {
      const generatedUsername = await generateUniqueProfileName(user.email);
      const { error } = await supabase
        .from("profiles")
        .update({ user_name: generatedUsername })
        .eq("id", user.id);
      sendAuthSlackMessage(generatedUsername, "social");
      if (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer
        variant={userCodes?.length ? "block" : "center"}
        className={userCodes?.length ? "" : "pb-[100px]"}
      >
        {userCodes?.length ? (
          <CodeList userCodes={userCodes} />
        ) : (
          <EmptyState />
        )}
        <ShareProfile />
      </CodeContainer>
    </div>
  );
}

export default Page;

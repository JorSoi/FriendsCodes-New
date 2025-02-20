import CodeContainer from "@/components/Global/CodeContainer";
import CodeList from "@/components/Product/my-codes/CodeList";
import EmptyState from "@/components/Product/my-codes/EmptyState";
import ShareProfile from "@/components/Product/my-codes/ShareProfile";
import Tab from "@/components/Product/Tab";
import { UserCodeWithRelations } from "@/types/general.types";
import { generateUniqueProfileName } from "@/utils/generateUniqueProfileName";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";
import clsx from "clsx";

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

    //Automatically generate username when being redirected here after oAuth registration.
    if (!profile?.user_name && user.email) {
      const { error } = await supabase
        .from("profiles")
        .update({ user_name: await generateUniqueProfileName(user.email) })
        .eq("id", user.id);

      if (error) {
        console.log(error);
      }
    }
    userCodes = data;
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

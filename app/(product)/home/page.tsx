import CodeContainer from "@/components/Product/my-codes/CodeContainer";
import CodeList from "@/components/Product/my-codes/CodeList";
import Tab from "@/components/Product/Tab";
import { UserCodeWithRelations } from "@/types/general.types";
import { generateUniqueProfileName } from "@/utils/generateUniqueProfileName";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";

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
      <CodeContainer className="mb-[15svh]">
        <CodeList userCodes={userCodes} />
      </CodeContainer>
    </div>
  );
}

export default Page;

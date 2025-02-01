import CodeContainer from "@/components/Product/CodeContainer";
import Tab from "@/components/Product/Tab";
import { UserCodeWithRelations } from "@/types/general.types";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";

async function Page() {

  let userCodes: UserCodeWithRelations[] | null = [];
  const supabase = await createClient();
  const { user } = await getServerProfile();

  if (user) {
    const { data } = await supabase
      .from("user_codes")
      .select(`*, companies(*)`)
      .eq("user_id", user.id);

    userCodes = data;

    console.log(userCodes)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Tab />
      <CodeContainer>
        f
      </CodeContainer>
    </div>
  );
}

export default Page;

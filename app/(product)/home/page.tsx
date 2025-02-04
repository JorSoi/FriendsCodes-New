import CodeContainer from "@/components/Product/CodeContainer";
import CodeList from "@/components/Product/CodeList";
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
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    userCodes = data;
  }

  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer>
        <CodeList userCodes={userCodes} />
      </CodeContainer>
    </div>
  );
}

export default Page;

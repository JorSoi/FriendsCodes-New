import CodeContainer from "@/components/Product/CodeContainer";
import ReferralCode from "@/components/Product/ReferralCode";
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
      .order("created_at", {ascending: false})

    userCodes = data;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5 mx-[3%]">
      <Tab />
      <CodeContainer>
        {userCodes?.map(({ ...referralCode }) => {
          return <ReferralCode key={referralCode.id} {...referralCode} />;
        })}
      </CodeContainer>
    </div>
  );
}

export default Page;

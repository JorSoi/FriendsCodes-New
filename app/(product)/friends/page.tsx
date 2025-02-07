import CodeContainer from "@/components/Product/CodeContainer";
import FriendsList from "@/components/Product/FriendsList";
import Tab from "@/components/Product/Tab";
import { FriendWithCodes } from "@/types/general.types";
import { getServerProfile } from "@/utils/getServerProfile";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

async function Page() {
  let friendsList: FriendWithCodes[]  = [];
  const { user } = await getServerProfile();
  const supabase = await createClient();
  if (user) {
    const { data, error } = await supabase.rpc("get_friends_with_codes", {
      current_user_id: user.id,
    }) as PostgrestSingleResponse<FriendWithCodes[]>
    if (!error) {
      friendsList = data;
    } else {
      console.log(error);
    }
  }

  return (
    <div className="mx-[3%] flex flex-col items-center justify-center gap-5">
      <Tab />
      <CodeContainer>
        <FriendsList friendsList={friendsList} />
      </CodeContainer>
    </div>
  );
}

export default Page;

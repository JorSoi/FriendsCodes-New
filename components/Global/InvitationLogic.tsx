"use client";

import { getClientProfile } from "@/utils/getClientProfile";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

//This logic wrapper simply checks if an invitation value is set in localstorage, adds the respective user as a friend and navigates the authed user to /friends to see their new friend just being added. No matter the result, it will clean up localstorage after the attempt, to prevent errors.
function InvitationLogic({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const invitation = localStorage.getItem("invitation");
    const addInvitationFriend = async () => {
      const { user } = await getClientProfile();

      if (invitation) {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("profiles")
          .select("id")
          .ilike("user_name", invitation)
          .single();

        if (!error && user) {
          const { error: insertError } = await supabase
            .from("friends")
            .insert({ user_id: user.id, friend_id: data.id });
          if (!insertError) {
            router.refresh();
          }
        } else {
          console.log(error);
        }
        localStorage.removeItem("invitation");
      }
    };

    addInvitationFriend();
  }, []);

  return <>{children}</>;
}

export default InvitationLogic;

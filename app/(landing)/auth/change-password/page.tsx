import ChangePassword from "@/components/Global/auth/ChangePassword";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Change Password - FriendsCodes",
  };

function page() {
    return (
        <div>
            <ChangePassword />
        </div>
    );
}

export default page;
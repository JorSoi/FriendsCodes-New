import PasswordResetForm from "@/components/Global/auth/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Forgot Password - FriendsCodes",
  };

function page() {
    return <PasswordResetForm />
}

export default page;
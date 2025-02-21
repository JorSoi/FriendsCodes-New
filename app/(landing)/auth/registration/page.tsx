import RegistrationForm from "@/components/Global/auth/Registration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - FriendsCodes",
};

function registration() {
  return  <RegistrationForm />;
}

export default registration;

import Login from "@/components/Global/auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome Back - FriendsCodes",
};

function page() {
  return <Login />
}

export default page;
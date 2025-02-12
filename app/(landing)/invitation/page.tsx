"use client";

import { getClientProfile } from "@/utils/getClientProfile";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";


//this page is a middle man to store the inviter so that other pages know to use the value from local storage, add its respective user as a friend and remove the item from local storage afterwards.
function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleRedirect = async () => {
    const { user, profile } = await getClientProfile();
    const friend = searchParams.get("friend");
    if (friend && friend !== profile?.user_name) {
      localStorage.setItem("invitation", friend);
    }
    
    router.push(user ? "/friends" : "/auth/login")
  };

  handleRedirect();
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Image
        src={"/icons/spinner.svg"}
        width={20}
        height={20}
        alt=""
        className="mx-auto my-0"
      />
    </div>
  );
}

export default Page;

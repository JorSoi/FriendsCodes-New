"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NotificationButton from "./Nofitications/NotificationButton";
import ProfileButton from "./ProfileButton";
import SupportButton from "./SupportButton";
import { usePathname, useRouter } from "next/navigation";
import { getClientProfile } from "@/utils/getClientProfile";
import { User } from "@supabase/supabase-js";
import Button from "@/components/Global/Button";
import Link from "next/link";

function NavBar() {
  const [searchValue, setSearchValue] = useState<string | null>(null); //initially set to null to prevent router in useEffect from pushing initially upon component mount inside the useEffect.
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const { user } = await getClientProfile();
      setUser(user);
    };
    checkIfLoggedIn();
  }, []);

  useEffect(() => {
    if (searchValue && searchValue.length >= 1) {
      window.history.pushState(null, "", `${pathName}?search=${searchValue}`);
    } else if (searchValue === "") {
      window.history.pushState(null, "", pathName);
    }
  }, [searchValue]);

  //Reset search any time the route changes
  useEffect(() => {
    if (searchValue !== "") {
      setSearchValue("");
    }
  }, [pathName]);

  return (
    <header className="fixed top-[30px] z-[9999] flex w-full items-center justify-center sm:top-[0px]">
      <nav className="flex w-[90%] max-w-[880px] items-center justify-between gap-4 rounded-full border border-[#ffffff10] bg-[#21203d] px-[24px] py-[9px] sm:w-[100%] sm:rounded-none sm:border-x-0 sm:border-b-1 sm:border-t-0 sm:px-[3%] sm:py-[10px]">
        <div className="flex shrink-0 grow-[1] items-center justify-start sm:grow-0">
          <Image
            src="/logo.png"
            width={35}
            height={35}
            className="shrink-0 cursor-pointer"
            alt="FriendsCodes Logo"
            onClick={() => router.push("/home")}
          />
        </div>
        <div className="flex grow-[1] items-center justify-center sm:grow-[2]">
          <div className="w-full">
            <div className="relative">
              <input
                type="search"
                className="transition-[colors, shadow] w-full appearance-none rounded-full border-1 border-[#ffffff18] bg-transparent p-3 pl-[40px] font-inter text-[14px] placeholder-[#73727E] outline-[#ffffff17] duration-[300ms] placeholder:text-[#ffffff52] autofill:bg-transparent focus:border-[#9291b7] focus:placeholder-[#39374f] focus:shadow-[0px_0px_0px_3px_#ffffff20] focus:outline-none"
                placeholder={
                  pathName == "/home"
                    ? "Search your referral codes"
                    : pathName == "/my-friends"
                      ? "Search friends or their referrals"
                      : `Search ${pathName.substring(1)}'s referrals`
                }
                onChange={({ target }) => setSearchValue(target.value)}
                value={searchValue || ""}
              />
              <Image
                src={"/icons/search.svg"}
                width={17}
                height={17}
                alt=""
                className="absolute left-4 top-1/2 -translate-y-1/2 opacity-[42%]"
              />
            </div>
          </div>
        </div>
        <div className="flex h-full flex-[1] items-center justify-end">
          <div className="flex">
            {user ? (
              <>
                <SupportButton />
                <NotificationButton />
                <ProfileButton />
              </>
            ) : (
              <div className="flex gap-2">
                <Link href={"/auth/login"}>
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="text-nowrap"
                  >
                    Sign in!
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

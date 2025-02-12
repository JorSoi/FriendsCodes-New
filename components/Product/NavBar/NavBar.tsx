"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NotificationButton from "./Nofitications/NotificationButton";
import ProfileButton from "./ProfileButton";
import SupportButton from "./SupportButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavBar() {
  const [searchValue, setSearchValue] = useState<string | null>(null); //initially set to null to prevent router from pushing upon component mount inside the useEffect.
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchValue) {
      router.push(`${pathName}?search=${searchValue}`);
    } else if (searchValue !== null) {
      console.log("push");
      router.push(pathName);
    }
  }, [searchValue]);

  useEffect(() => {
    if (searchParams.get("search")) {
      setSearchValue(searchParams.get("search"));
    }
  }, []);

  return (
    <header className="fixed top-[30px] z-[9999] flex w-full items-center justify-center sm:top-[0px]">
      <nav className="flex w-[90%] max-w-[880px] items-center justify-between gap-4 rounded-full border-2 border-[#ffffff16] bg-[#1d1d2f9e] px-[24px] py-[9px] backdrop-blur-xl sm:w-[100%] sm:px-[3%] sm:py-[10px] sm:rounded-none sm:border-x-0 sm:border-t-0  sm:border-b-2">
        <div className="flex shrink-0 grow-[1] items-center justify-start sm:grow-0">
          <Image
            src="/logo.png"
            width={35}
            height={35}
            className="shrink-0 cursor-pointer"
            alt="FriendsCodes Logo"
            onClick={() => router.push('/home')}
          />
        </div>
        <div className="flex grow-[1] items-center justify-center sm:grow-[2]">
          <div className="w-full">
            <div className="relative">
              <input
                type="search"
                className="transition-[colors, shadow] w-full appearance-none rounded-full border-1  border-[#ffffff18] bg-transparent p-3 pl-[40px] font-inter text-[14px] placeholder-[#73727E] outline-[#ffffff17] duration-[300ms] placeholder:text-[#ffffff52] autofill:bg-transparent focus:border-[#9291b7] focus:placeholder-[#39374f] focus:shadow-[0px_0px_0px_3px_#ffffff20] focus:outline-none"
                placeholder={pathName == '/home' ? "Search your referral codes" : "Search friends or their referrals"}
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
            <SupportButton />

            <NotificationButton />
            <ProfileButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

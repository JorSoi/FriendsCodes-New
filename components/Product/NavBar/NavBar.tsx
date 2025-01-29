"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Support from "./Support";

function NavBar() {
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const searchUserCodes = async () => {
      const supabase = createClient();
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from("user_codes")
          .select(`companies!inner(name)`)
          .eq("user_id", user?.id)
          .ilike("companies.name", `%${searchValue}%`);
        if (data) {
          data.forEach((item) => {
            console.log(item.companies)
          })
        } else {
          console.log(error);
        }
      }
    };

    searchUserCodes();
  }, [searchValue]);

  return (
    <div className="fixed top-[30px] z-[9999] flex w-full items-center justify-center sm:top-[25px]">
      <nav className="flex w-[90%] max-w-[880px] items-center justify-between rounded-full border-2 border-[#ffffff16] bg-[#ffffff16] px-[24px] py-[9px] backdrop-blur-md sm:w-[94%] sm:px-[18px] sm:py-[10px]">
        <Image
          src="/logo.png"
          width={35}
          height={35}
          className="cursor-pointer"
          alt="FriendsCodes Logo"
        />

        <div className="w-full max-w-[400px] shrink-0">
          <div className="relative">
            <input
              type="search"
              className="transition-[colors, shadow] w-full max-w-[400px] appearance-none rounded-full border-1 border-[#262537] border-[#ffffff18] bg-transparent p-3 pl-[40px] font-inter text-[14px] placeholder-[#73727E] outline-[#ffffff17] duration-[300ms] placeholder:text-[#ffffff52] autofill:bg-transparent focus:border-[#9291b7] focus:placeholder-[#39374f] focus:shadow-[0px_0px_0px_3px_#ffffff20] focus:outline-none"
              placeholder="Search your referral codes"
              onChange={({ target }) => setSearchValue(target.value)}
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

        <div className="flex gap-2">
          <Support />
          <Notifications />
          <Profile />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

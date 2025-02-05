"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/Global/Button";
import HoverMenu from "@/components/Global/HoverMenu/HoverMenu";
import HoverMenuItem from "@/components/Global/HoverMenu/HoverMenuItem";
import { getClientProfile } from "@/utils/getClientProfile";
import { Tables } from "@/types/database.types";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

function ProfileButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [user, setUser] = useState<Tables<"profiles"> | null>();

  const handleLogOut = async () => {
    const supabase = createClient();
    const {error} = await supabase.auth.signOut()
    if(!error) {
      redirect('/')
    } else {
      console.log(error)
    }
  }

  useEffect(() => {
    const getUser = async () => {
      const { profile, error } = await getClientProfile();
      if (!error) setUser(profile);
    };

    getUser();
  }, []);

  return (
    <div className="relative">
      <Button
        variant={"ghost"}
        className="group flex size-[40px] items-center justify-center p-[unset]"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="relative">
          <Image
            src={"/icons/user.svg"}
            width={14}
            height={14}
            alt="Notifications"
            className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
            draggable={false}
          />
        </div>
      </Button>
      <HoverMenu
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        className="w-[200px] text-[14px] text-[#C0C1C5] [&_img]:opacity-80 sm:w-[unset]"
      >
        <HoverMenuItem key={1} className="flex cursor-auto gap-2">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#ffffff28]">
            <Image
              src={"/icons/user.svg"}
              width={14}
              height={14}
              alt="Notifications"
              className="select-none opacity-[50%] transition-all"
              draggable={false}
            />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-white">My Profile</h4>
            <p className="text-[12px] font-medium text-[#ffffff70]">
              @{user?.user_name}
            </p>
          </div>
        </HoverMenuItem>
        <HoverMenuItem key={2} className="flex gap-2">
          <Image
            src={"/icons/gear.svg"}
            width={16}
            height={16}
            alt="Bug"
            draggable={false}
          />
          <p>Account Settings</p>
        </HoverMenuItem>
        <HoverMenuItem key={3} className="flex gap-2">
          <Image
            src={"/icons/announcement.svg"}
            width={16}
            height={16}
            alt="Bug"
            draggable={false}
          />
          <p>Feature Requests</p>
        </HoverMenuItem>
        <hr className="my-1 h-px border-0 bg-[#ffffff26]" />
        
        <HoverMenuItem key={4} className="flex gap-2" onClick={handleLogOut}>
          <Image
            src={"/icons/logout.svg"}
            width={16}
            height={16}
            alt="Bug"
            draggable={false}
          />
          <p>Log out</p>
        </HoverMenuItem>
      </HoverMenu>
    </div>
  );
}

export default ProfileButton;

"use client";

import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Global/Button";

function ProfileButton() {
  useEffect(() => {}, []);

  return (
    <Button
      variant={"ghost"}
      className="group flex size-[40px] items-center justify-center p-[unset]"
    >
      <div className="relative">
        <Image
          src={"/icons/user.svg"}
          width={17}
          height={17}
          alt="Notifications"
          className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
          draggable={false}
        />
      </div>
    </Button>
  );
}

export default ProfileButton;

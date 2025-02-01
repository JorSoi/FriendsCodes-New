"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Global/Button";
import HoverMenu from "@/components/Global/HoverMenu/HoverMenu";
import HoverMenuItem from "@/components/Global/HoverMenu/HoverMenuItem";
import Link from "next/link";

function SupportButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsVisible(!isVisible)}
        variant={"ghost"}
        className="group relative flex size-[40px] items-center justify-center p-[unset]"
      >
        <Image
          src={"/icons/support.svg"}
          width={20}
          height={20}
          alt="Support"
          className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
          draggable={false}
        />
      </Button>
      <HoverMenu
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        className="w-[200px] text-[14px] text-[#ffffff95] [&_img]:opacity-70"
      >
        <h4 className="mb-2 px-1 text-[15px] font-semibold text-white">
          Help Center
        </h4>
        <HoverMenuItem key={1} className="flex gap-2">
          <Image
            src={"/icons/alert-octagon.svg"}
            width={16}
            height={16}
            alt="Bug"
          />
          <p className="">Report Bug</p>
        </HoverMenuItem>
        <HoverMenuItem key={2} className="flex gap-2">
          <Image
            src={"/icons/announcement.svg"}
            width={16}
            height={16}
            alt="Bug"
          />
          <p>Feature Requests</p>
        </HoverMenuItem>
        <Link href={'/#faq'}>
          <HoverMenuItem key={3} className="flex gap-2">
            <Image
              src={"/icons/message-question.svg"}
              width={16}
              height={16}
              alt="Bug"
            />
            <p>FAQ</p>
          </HoverMenuItem>
        </Link>
      </HoverMenu>
    </div>
  );
}

export default SupportButton;

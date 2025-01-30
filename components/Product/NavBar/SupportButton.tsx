"use client";

import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Global/Button";

function SupportButton() {
  useEffect(() => {}, []);

  return (
    <Button
      variant={"ghost"}
      className="group flex size-[40px] items-center justify-center p-[unset]"
    >
      <Image
        src={"/icons/support.svg"}
        width={24}
        height={24}
        alt="Support"
        className="select-none opacity-[50%] transition-all group-hover:opacity-[70%]"
        draggable={false}
      />
    </Button>
  );
}

export default SupportButton;

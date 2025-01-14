"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

function Question({
  questionTitle,
  iconSrc,
  children,
}: {
  questionTitle: string;
  iconSrc: string;
  children: React.ReactNode;
}) {
  const handleClick = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={handleClick}
      className="border-1 group relative flex w-full gap-5 rounded-[12px] border-[#ffffff16] bg-[#ffffff10] p-5 mlg:flex-col sm:gap-0 sm:p-4"
    >
      {/* Image Container */}
      <div className="items-center sm:flex sm:gap-3">
        <div className="flex size-[44px] shrink-0 items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff30] to-[#ffffff03] shadow-[inset_0px_0px_3px_0.5px_rgba(255,255,255,0.06)] sm:size-[38px]">
          <Image src={iconSrc} width={20} height={20} alt="" />
        </div>
        <p className="hidden pr-4 text-[18px] font-semibold sm:block">
          {questionTitle}
        </p>
      </div>

      {/* Content Container */}
      <div>
        <h4 className="text-[18px] font-semibold sm:hidden">{questionTitle}</h4>
        <p className={clsx("mt-1 text-[#7D7C87] sm:mt-3", {
            "sm:block": isOpen,
            "sm:hidden": !isOpen,
        })}>{children}</p>
      </div>

      <div
        className={clsx(
          "absolute right-2 hidden size-10 items-center justify-center transition-transform sm:flex",
          {
            "rotate-90": isOpen,
            "rotate-0": !isOpen,
          },
        )}
      >
        <Image src={"/icons/chevron.svg"} width={7} height={7} alt="" />
      </div>
    </div>
  );
}

export default Question;

"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

function Question({
  questionTitle,
  iconSrc,
  iconWidth,
  iconHeight,
  children,
}: {
  questionTitle: string;
  iconSrc: string;
  iconWidth?: number;
  iconHeight?: number;
  children: React.ReactNode;
}) {
  const handleClick = () => setIsOpen(!isOpen);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={handleClick}
      className="fadeIn group relative flex w-full cursor-pointer gap-5 rounded-[12px] border-1 border-[#ffffff16] bg-[#ffffff10] p-5 transition-colors duration-[300ms] hover:bg-[#ffffff15] active:scale-[99%] mlg:flex-col sm:gap-0 sm:border-[#ffffff09] sm:bg-[#ffffff09] sm:p-4"
    >
      {/* Image Container */}
      <div className="items-center sm:flex sm:gap-3">
        <div className="flex size-[44px] shrink-0 items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff30] to-[#ffffff03] shadow-[inset_0px_0px_3px_0.5px_rgba(255,255,255,0.06)] sm:size-[38px]">
          <Image
            src={iconSrc}
            width={iconWidth ? iconWidth : 20}
            height={iconHeight ? iconHeight : 20}
            alt=""
          />
        </div>
        <h4 className="hidden pr-4 text-[16px] font-semibold text-white sm:block">
          {questionTitle}
        </h4>
      </div>

      {/* Content Container */}
      <div>
        <h4 className="text-[18px] font-semibold sm:hidden text-white">{questionTitle}</h4>
        <p
          className={clsx("mt-1 text-[#9594a1] sm:mt-3", {
            "sm:block": isOpen,
            "sm:hidden": !isOpen,
          })}
        >
          {children}
        </p>
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

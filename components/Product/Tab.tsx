"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

function Tab() {
  const pathName = usePathname();
  const router = useRouter();

  //This approach worked really well: https://stackblitz.com/edit/web-platform-wgsvqs?file=index.html
  return (
    <div className="relative flex h-12 items-center justify-center gap-1 bg-[#2d2c4c] text-white [&_*]:transition-colors font-medium">
      <div className="absolute -left-[16px] top-0 -z-[2] h-full w-8 skew-x-[20deg] rounded-bl-[8px] rounded-tl-[17px] bg-[#2d2c4c]"></div>
      <div className="absolute -right-[16px] top-0 -z-[2] h-full w-8 -skew-x-[200deg] rounded-br-[8px] rounded-tr-[17px] bg-[#2d2c4c]"></div>

      <div
        onClick={() => router.push("/home")}
        className={clsx(
          "group relative flex h-[90%] cursor-pointer items-center rounded-r-xl px-6 text-white hover:bg-[#ffffff20]",
          {
            "bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[inset_-2px_3px_2px_-1px_#ffffff70]":
              pathName == "/home",
          },
        )}
      >
        <div
          onClick={() => router.push("/home")}
          className={clsx(
            "absolute -left-[13px] top-0 -z-[1] h-full w-6 skew-x-[20deg] rounded-bl-[6px] rounded-tl-[14px] text-white group-hover:bg-[#ffffff20]",
            {
              "bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[inset_-2px_3px_2px_-1px_#ffffff70]":
                pathName == "/home",
            },
          )}
        ></div>
        My Codes
      </div>

      <div
        onClick={() => router.push("/friends")}
        className={clsx(
          "group relative flex h-[90%] cursor-pointer items-center rounded-l-xl px-6 text-white hover:bg-[#ffffff20]",
          {
            "bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[inset_2px_3px_2px_-1px_#ffffff70]":
              pathName == "/friends",
          },
        )}
      >
        <div
          onClick={() => router.push("/friends")}
          className={clsx(
            "absolute -right-[13px] top-0 -z-[1] h-full w-6 skew-x-[-20deg] cursor-pointer rounded-br-[6px] rounded-tr-[14px] text-white group-hover:bg-[#ffffff20]",
            {
              "bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[inset_2px_3px_2px_-1px_#ffffff70]":
                pathName == "/friends",
            },
          )}
        ></div>
        My Friends
      </div>
    </div>
  );
}

export default Tab;

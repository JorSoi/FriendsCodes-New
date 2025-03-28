"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Global/Button";
import { useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

function NavBar({ className }: { className?: string }) {
  const visitorName = useSearchParams().get("visitor");

  return (
    <nav className="fixed top-[30px] z-[9999] flex w-full items-center justify-center sm:top-[25px]">
      <div
        className={twMerge(
          "w-[90%] max-w-[880px] rounded-full border-2 border-[#ffffff16] bg-[#ffffff16] px-[24px] py-[12px] backdrop-blur-md sm:w-[94%] sm:px-[18px] sm:py-[10px]",
          className,
        )}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            className="flex items-center gap-[10px]"
            href={`/${visitorName ? "?visitor=" + visitorName : ""}#hero`}
          >
            <Image
              src="/logo.png"
              width={35}
              height={35}
              className="cursor-pointer"
              alt="FriendsCodes Logo"
            />
            <p className="text-[20px] font-[550] text-white sm:hidden">
              FriendsCodes
            </p>
          </Link>
          <div className="flex gap-[34px] md:hidden">
            <Link
              className="font-[550] text-white hover:opacity-75"
              href={`/${visitorName ? "?visitor=" + visitorName : ""}#how-it-works`}
              data-umami-event="lp-nav-how-it-works"
            >
              How it works
            </Link>
            <Link
              className="font-[550] text-white hover:opacity-75"
              href={`/${visitorName ? "?visitor=" + visitorName : ""}#faq`}
              data-umami-event="lp-nav-faq"
            >
              FAQ
            </Link>
            <Link
              className="font-[550] text-white hover:opacity-75"
              href={`/${visitorName ? "?visitor=" + visitorName : ""}#about`}
            >
              About
            </Link>
          </div>
          <div className="flex gap-[15px]">
            <Link
              href={`/auth/login${visitorName ? "?visitor=" + visitorName : ""}`}
            >
              <Button
                variant={"secondary"}
                size={"sm"}
                data-umami-event="lp-nav-login"
              >
                Log in
              </Button>
            </Link>
            <Link
              href={`/auth/registration${visitorName ? "?visitor=" + visitorName : ""}`}
            >
              <Button
                variant={"primary"}
                size={"sm"}
                data-umami-event="lp-nav-registration"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

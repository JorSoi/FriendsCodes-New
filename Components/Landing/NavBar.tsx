import Image from "next/image";
import Link from "next/link";
import Button from "../Global/Button";

function NavBar() {
  return (
    <nav className="fixed top-[30px] z-[9999] flex w-full items-center justify-center sm:top-[25px]">
      <div className="w-[90%] max-w-[880px] rounded-full border-2 border-[#ffffff16] bg-[#ffffff16] px-[24px] py-[12px] backdrop-blur-md sm:w-[94%] sm:px-[18px] sm:py-[10px]">
        <div className="flex w-full items-center justify-between">
          <Link className="flex items-center gap-[10px]" href="/#hero">
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
              href={"/#how-it-works"}
            >
              How it works
            </Link>
            <Link
              className="font-[550] text-white hover:opacity-75"
              href={"/#about"}
            >
              FAQ
            </Link>
            <Link
              className="font-[550] text-white hover:opacity-75"
              href={"/#blog"}
            >
              About
            </Link>
          </div>
          <div className="flex gap-[15px]">
            <Link href="https://friendscodes.de/auth/signIn">
              <Button variant={"secondary"} size={"sm"}>
                Sign In
              </Button>
            </Link>
            <Link href={"https://friendscodes.de/auth/signUp"}>
              <Button variant={"primary"} size={"sm"}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

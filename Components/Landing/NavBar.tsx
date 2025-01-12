import Image from "next/image";
import Link from "next/link";
import Button from "../Global/Button";

function NavBar () {
    return (
        <div className="w-full flex justify-center items-center fixed top-[30px] z-[9999]">
            <div className="w-[90%] max-w-[880px] sm:w-[94%] bg-[#ffffff16] rounded-full backdrop-blur-md border-2 border-[#ffffff16] px-[24px] py-[12px]">
                <div className="flex justify-between items-center w-full">
                    <Link className="flex gap-[10px] items-center" href="/#hero">
                        <Image src="/logo.svg" width={35} height={35} className="cursor-pointer" alt="FriendsCodes Logo"/>
                        <p className="text-white font-[550] text-[20px] sm:hidden">FriendsCodes</p>
                    </Link>
                    <div className="flex gap-[34px] md:hidden">
                        <Link className="text-white hover:opacity-75 font-[550]" href={'/#how-it-works'}>How it works</Link>
                        <Link className="text-white hover:opacity-75 font-[550]" href={'/#about'}>About</Link>
                        <Link className="text-white hover:opacity-75 font-[550]" href={'/#blog'}>Blog</Link>
                    </div>
                    <div className="flex gap-[15px]">
                        <Button variant={'secondary'} size={'sm'}>Sign In</Button>
                        <Button variant={'primary'} size={'sm'}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
       
    )
}


export default NavBar;
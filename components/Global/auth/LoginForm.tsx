"use client";

import SocialAuthButton from "./SocialAuthButton";
import Image from "next/image";
import Input from "../Input";
import { Suspense, useState } from "react";
import Checkbox from "../Checkbox";
import Link from "next/link";
import Button from "../Button";

function RegistrationForm() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative flex w-full justify-center pb-7">
        <Image
          className="drop-shadow-[0px_11.9px_16.87px_rgba(243,32,213,0.55)]"
          src={`/logo.svg`}
          width={56}
          height={56}
          alt={`FriendsCodes logo`}
          draggable={false}
        />
        <Image
          className="absolute top-1/2 z-[-1] size-[330px] -translate-y-[45%] select-none"
          src={`/auth-bg-decoration.png`}
          width={506}
          height={506}
          alt=""
          draggable={false}
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <Suspense>
          <h3 className="mr-2 text-[22px] font-semibold">
            Welcome back! 🎉
          </h3>
        </Suspense>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          Time to catch up on your referral codes! Add more codes and links to
          your dashboard if you can.
        </p>
      </div>

      {/* Mark: Social Signup Buttons */}
      <div className="mt-5 flex w-full justify-between gap-3">
        <SocialAuthButton provider="google" />
        <SocialAuthButton provider="twitter" className="[&>img]:size-[20px]" />
        <SocialAuthButton provider="facebook" className="[&>img]:size-[24px]" />
      </div>

      {/* Horizontal Line */}
      <div className="relative my-7 h-px w-full bg-[#262537] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#09071C] after:px-4 after:text-[#7D7C87] after:content-['OR']"></div>

      {/* Form Fields */}
      <div className="w-full space-y-3">
        <Input
          name="email"
          type="email"
          variant={"outline"}
          size={"md"}
          placeholder="Enter your email..."
          label="Email"
        />
        <div className="relative">
          <Input
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            variant={"outline"}
            size={"md"}
            placeholder="Enter your password..."
            label="Password"
            className="pr-9"
          />
          <div
            className="absolute bottom-[5%] right-1 flex size-10 cursor-pointer items-center justify-center"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              className="select-none"
              src={`/icons/eye${isPasswordVisible ? "-hidden" : ""}.svg`}
              width={18}
              height={18}
              alt="make password visible"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Checkbox and forgot password */}
      <div className="mt-6 flex justify-between">
        <Checkbox label="Remember me" />
        <Link
          href={"/reset-password"}
          className="underline-offset-2] font-inter text-[14px] underline"
        >
          Forgot Password?
        </Link>
      </div>

      <Link href={"/dashboard"}>
        <Button className="mt-7 w-full">Log in</Button>
      </Link>

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={"/auth/registration"}
          className="text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          I don&apos;t have an account
        </Link>
      </div>
    </div>
  );
}

export default RegistrationForm;

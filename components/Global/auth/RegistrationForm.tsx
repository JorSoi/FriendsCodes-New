"use client";

import { useSearchParams } from "next/navigation";
import SocialAuthButton from "./SocialAuthButton";
import Image from "next/image";
import useAnimations from "@/lib/useAnimations";
import Input from "../Input";
import { useState } from "react";
import Checkbox from "../Checkbox";
import Link from "next/link";
import Button from "../Button";
import Form from "../Form";
import * as Yup from "yup";

function RegistrationForm() {
  const visitorName = useSearchParams().get("visitor");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  useAnimations();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(15, "Too long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
  });

  const handleSubmit = (values: { [key: string]: string }) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="w-full max-w-[400px] pb-[15vh]">
      <div className="relative flex w-full justify-center pb-7">
        <Image
          className="drop-shadow-[0px_11.9px_16.87px_rgba(243,32,213,0.55)]"
          src={`/logo.png`}
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
        <div className="flex- flex text-[22px] font-semibold">
          <h3 className="mr-2">Hi {visitorName}</h3>
          <h3 className="handshake touch-none select-none"> 👋</h3>
          <h3 className="ml-[2px]">, let&apos;s get started.</h3>
        </div>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          You share your first referral codes. We make sure that they find the
          right person to redeem them!
        </p>
      </div>

      {/* Mark: Social Signup Buttons */}
      <div className="mt-5 flex w-full justify-between gap-3">
        <SocialAuthButton provider="google" />
        <SocialAuthButton provider="twitter" className="[&>img]:size-[17px]" />
        <SocialAuthButton provider="facebook" className="[&>img]:size-[20px]" />
      </div>

      {/* Horizontal Line */}
      <div className="relative my-7 h-px w-full bg-[#262537] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#09071C] after:px-4 after:text-[14px] after:text-[#7D7C87] after:content-['OR']"></div>

      {/* Form Fields */}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="w-full space-y-3 ">
          <Input
            name="name"
            type="text"
            variant={"outline"}
            size={"md"}
            placeholder="Enter your name..."
            label="Name"
            required
          />
          <Input
            name="email"
            type="email"
            variant={"outline"}
            size={"md"}
            placeholder="Enter your email..."
            label="Email"
            required
          />
          <div className="relative">
            <Input
              className="pr-9"
              name="password"
              type={isPasswordVisible ? "text" : "password"}
              variant={"outline"}
              size={"md"}
              placeholder="Enter your password..."
              label="Password"
              required
            />
            <div
              className="absolute top-[29px] right-1 flex size-10 cursor-pointer items-center justify-center"
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

          <Button type="submit" className="mt-7 w-full">
            Sign up
          </Button>
      </Form>

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={"/auth/login"}
          className="text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          I have an account
        </Link>
      </div>
    </div>
  );
}

export default RegistrationForm;

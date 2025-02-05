"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SocialAuthButton from "./SocialAuthButton";
import Image from "next/image";
import useAnimations from "@/lib/useAnimations";
import Input from "../FormComponents/Input";
import { useState } from "react";
import Checkbox from "../FormComponents/Checkbox";
import Link from "next/link";
import Button from "../Button";
import Form from "../FormComponents/Form";
import * as Yup from "yup";
import { createClient } from "@/utils/supabase/client";
import { FormikHelpers } from "formik";
import { FormValues } from "@/types/general.types";

function Login() {
  const visitorName = useSearchParams().get("visitor");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const supabase = createClient();
  const router = useRouter();
  useAnimations();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    setIsLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (user) {
      router.push("/home");
    } else {
      actions.setFieldError("password", error?.message);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative flex w-full justify-center pb-7">
        <Link
          href={`/${visitorName ? "?visitor=" + visitorName : ""}`}
          className="transition-transform hover:scale-105"
        >
          <Image
            className="drop-shadow-[0px_11.9px_16.87px_rgba(243,32,213,0.55)]"
            src={`/logo.png`}
            width={56}
            height={56}
            alt={`FriendsCodes logo`}
            draggable={false}
          />
        </Link>
        <Image
          className="absolute top-1/2 z-[-1] size-[330px] -translate-y-[45%] select-none"
          src={`/auth-bg-decoration.webp`}
          width={506}
          height={506}
          alt=""
          draggable={false}
        />
      </div>

      <div className="mb-5 flex flex-col items-center text-center">
        <div className="flex- flex text-[22px] font-semibold text-white">
          <h3 className="mr-2">
            Welcome back{visitorName ? `, ${visitorName}!` : ""}
          </h3>
          <h3 className="touch-none select-none">🎉</h3>
        </div>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          Let&apos;s catch up on your referral codes. The more you add, the more
          benefits you can collect.
        </p>
      </div>

      {/* Mark: Social Signup Buttons */}
      <div className="flex w-full justify-between gap-3">
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
        <div className="w-full space-y-3">
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
              className="absolute right-1 top-[29px] flex size-10 cursor-pointer items-center justify-center"
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
            href={"/auth/forgot-password"}
            className="underline-offset-2] font-inter text-[14px] underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="mt-7 w-full" loading={isLoading}>
          Login
        </Button>
      </Form>

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={`/auth/registration${visitorName ? "?visitor=" + visitorName : ""}`}
          className="text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          I don&apos;t have an account yet
        </Link>
      </div>
    </div>
  );
}

export default Login;

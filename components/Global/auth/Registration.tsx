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
import { FormikHelpers, FormikValues } from "formik";
import { sendAuthSlackMessage } from "@/lib/sendAuthSlackMessage";

function RegistrationForm() {
  const visitorName = useSearchParams().get("visitor");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const invitation = localStorage.getItem("invitation");
  const supabase = createClient();
  const router = useRouter();
  useAnimations();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^\S*$/, "Username cannot contain spaces")
      .matches(/^(?!.*@.*\..*).*$/, "Profile name cannot be an email address")
      .required("Name is required")
      .min(3, "Too short!")
      .max(15, "Too long!")
      .test(
        "name",
        "This user already exists. 😦  If it's you, try logging in instead!",
        async (value) => {
          const { data, error } = await supabase
            .from("profiles")
            .select()
            .ilike("user_name", value);

          if (!error && data.length) {
            return false;
          } else {
            return true;
          }
        },
      ),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
  });

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => {
    setIsLoading(true);
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          user_name: values.name,
        },
      },
    });
    if (user) {
      sendAuthSlackMessage(values.name, "email");
      window.umami.identify({ email: user.email, user_id: user.id }); //attach user data to visitor session in analytics
      //if user is coming from invitation link, navigate them straight to /friends page to see their new friend.
      setIsLoading(false);
      router.push(invitation ? "/friends" : "/home");
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
          <h3 className="mr-2">Hi {visitorName}</h3>
          <h3 className="handshake touch-none select-none"> 👋</h3>
          <h3 className="ml-[2px]">, let&apos;s get started.</h3>
        </div>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          Add your first referral codes - your profile is easy to manage and all in one place!
        </p>
      </div>

      {/* Mark: Social Signup Buttons */}
      <div className="flex w-full justify-between gap-3">
        <SocialAuthButton provider="google" />
        <SocialAuthButton provider="facebook" className="[&>img]:size-[20px]" />
        <SocialAuthButton provider="twitter" className="[&>img]:size-[17px]" />
      </div>

      {/* Horizontal Line */}
      <div className="relative my-7 h-px w-full bg-[#262537] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#09071C] after:px-4 after:text-[14px] after:text-[#7D7C87] after:content-['OR']"></div>

      {/* Form Fields */}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="w-full space-y-3">
          <div className="relative">
            <p className="pointer-events-none absolute left-3 top-[37px] select-none text-[14.8px] font-medium tracking-[0.017em] text-white">
              friendscodes.app/
            </p>
            <Input
              className="pl-[138px] font-medium tracking-[0.017em] text-[#e721c9] placeholder:font-normal sm:pl-[139px]"
              name="name"
              type="text"
              variant={"outline"}
              size={"md"}
              placeholder="yourname"
              label="Choose a username for your profile"
              required
            />
          </div>
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
            className="font-inter text-[14px] underline underline-offset-2"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit" className="mt-7 w-full" loading={isLoading} data-umami-event="auth-registration">
          Register
        </Button>
      </Form>

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={`/auth/login${visitorName ? "?visitor=" + visitorName : ""}`}
          className="text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          I have an account
        </Link>
      </div>
    </div>
  );
}

export default RegistrationForm;

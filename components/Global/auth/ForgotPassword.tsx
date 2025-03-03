"use client"

import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import Form from "../FormComponents/Form";
import Input from "../FormComponents/Input";
import Button from "../Button";
import { createClient } from "@/utils/supabase/client";
import { FormikHelpers, FormikValues } from "formik";
import { useState } from "react";

function PasswordResetForm() {
  const supabase = createClient();
  const [emailDelivered, setEmailDelivered] = useState(false);
  const [recipientMail, setRecipientMail] = useState("");

  const deliverEmail = async (
    values: FormikValues,
    { setFieldError, resetForm }: FormikHelpers<FormikValues>,
  ) => {

    //Check if email actually exists first
    const {data : emailExists} = await supabase.from("profiles").select().eq("email", values.email).maybeSingle();
    if(!emailExists) {
      setFieldError("email", "Couldn't find this email") 
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: `${window.origin}/auth/change-password`,
    });

    if (!error) {
      setEmailDelivered(true);
      setRecipientMail(values.email);
      resetForm();
    } else {
      setFieldError("email", `Couldn't send email : ${error.message}`);
    }
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative flex w-full justify-center pb-7">
        <div className="flex size-[56px] items-center justify-center overflow-hidden rounded-lg border-1 border-[#ffffff15] bg-gradient-to-b from-[#ffffff26] to-[#ffffff05] backdrop-blur-[30px]">
          <h3 className="text-2xl">{emailDelivered ? "✅" : "🔐"}</h3>
        </div>

        <Image
          className="absolute top-1/2 z-[-1] size-[330px] -translate-y-[45%] select-none"
          src={`/auth-bg-decoration.webp`}
          width={506}
          height={506}
          alt=""
          draggable={false}
          priority
        />
      </div>

      <div className="mb-5 flex flex-col items-center text-center">
        <div className="flex- flex">
          <h3 className="text-[22px] font-semibold text-white">
            {emailDelivered ? "Email Sent!" : "Forgot your password?"}
          </h3>
        </div>
        {emailDelivered ? (
          <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
            Please follow the instructions in your email{" "}
            <span className="text-[#EA01DD]">{recipientMail}</span> to reset the
            password.
          </p>
        ) : (
          <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
            No worries! We will send you an email to reset your password
          </p>
        )}
      </div>

      {/* Form Fields */}
      {!emailDelivered && (
        <Form
          initialValues={{ email: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Required"),
          })}
          onSubmit={deliverEmail}
        >
          <Input
            name="email"
            type="email"
            variant={"outline"}
            size={"md"}
            placeholder="Enter your email..."
            label="Email"
            required
          />
          <div className="mt-6 flex justify-between">
            <p
              onClick={() =>
                window.open("https://app.youform.com/forms/wmbthihc", "_blank")
              }
              className="underline-offset-2] cursor-pointer font-inter text-[14px] underline"
            >
              I&apos;m still having issues.
            </p>
          </div>

          <Button type="submit" className="mt-7 w-full">
            Send Recovery Email
          </Button>
        </Form>
      )}

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={"/auth/login"}
          className="group flex gap-3 text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          <Image
            className="rotate-180 opacity-50 group-hover:opacity-100"
            src={"/icons/chevron.svg"}
            width={6}
            height={6}
            alt=""
            draggable={false}
          />
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default PasswordResetForm;

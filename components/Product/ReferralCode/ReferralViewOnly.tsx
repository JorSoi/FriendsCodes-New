"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Button from "../../Global/Button";
import Form from "../../Global/FormComponents/Form";
import Input from "../../Global/FormComponents/Input";
import CompanyLogo from "../CompanyLogo";
import Image from "next/image";
import { FormikValues } from "formik";

function ReferralViewOnly({ ...code }: UserCodeWithRelations) {
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code.referral_value);
    } catch (error) {
      console.log(error);
    }
  };

  function isValidUrl(referralValue: string) {
    try {
      new URL(referralValue);
      return true; // If URL constructor succeeds, it's a valid URL
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <Form
      initialValues={{ referralCode: code.referral_value! }}
      onSubmit={(value: FormikValues) => {
        if (isValidUrl(code.referral_value)) {
          window.open(value.referralCode, "_blank");
        } else {
          copyCode();
        }
      }}
    >
      <div className="rounded-xl border-1 border-[#ffffff20] bg-[#333350] p-4">
        <div className="mb-5 flex size-full flex-col items-center justify-center">
          <div className="flex size-[80px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px]">
            <CompanyLogo src={code.companies.logo_url} size={"xl"} />
          </div>

          <h3 className="mt-[10px] w-full truncate text-[17px] font-medium text-white">
            {code.companies.name}
          </h3>
          <p className="text-[15px] text-[#ffffff80]">
            Copy this code so that you earn referral benefits from{" "}
            {code.companies.name}!
          </p>
        </div>
        <div className="relative">
          <Input
            type="text"
            name="referralCode"
            className="border-[2.4px] border-dashed border-[#5c6484] py-3 pr-11 text-[15px] text-white"
            placeholder="e.g. https://refer.amazon.com/jorsoi13"
            autoComplete="off"
            readOnly
          />
          <Image
            src={"/icons/copy.svg"}
            width={18}
            height={18}
            alt=""
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={copyCode}
          />
        </div>
      </div>
      <Button className="mt-5 w-full">
        {isValidUrl(code.referral_value)
          ? "Open Referral Link"
          : "Copy Referral Code"}
      </Button>
    </Form>
  );
}

export default ReferralViewOnly;

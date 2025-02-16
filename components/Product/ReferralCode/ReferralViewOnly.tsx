"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Button from "../../Global/Button";
import Form from "../../Global/FormComponents/Form";
import Input from "../../Global/FormComponents/Input";
import CompanyLogo from "../CompanyLogo";
import Image from "next/image";
import { useClipboard } from "@/hooks/useClipboard";

function ReferralViewOnly({ ...code }: UserCodeWithRelations) {
  const [writeText, hasCopied] = useClipboard();

  function checkURLValidity(referralValue: string) {
    try {
      new URL(referralValue);
      return true; // If URL constructor succeeds, it's a valid URL
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  const isValidUrl = checkURLValidity(code.referral_value);

  return (
    <Form
      initialValues={{ referralCode: code.referral_value! }}
      onSubmit={() => {}}
    >
      <div className="rounded-xl border-1 border-[#ffffff20] bg-[#333350] p-4 ">
        <div className="flex size-full flex-col items-center justify-center">
          <div className="flex size-[80px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px]">
            <CompanyLogo src={code.companies.logo_url} size={"xl"} />
          </div>

          <h3 className="mt-[10px] w-full truncate text-[19px] font-semibold text-white">
            {code.companies.name}
          </h3>
          <p className="text-[15px] text-[#a1a3ae]">
            {isValidUrl ? "Open the referral link" : "Copy the referral code"}{" "}
            from @jorsoi below and redeem it at {code.companies.name}! 👇👇
          </p>
        </div>
      </div>
      <div className="ml-4 h-[10px] w-4 bg-[#333350]"></div>
      <div className="rounded-xl border-1 border-[#ffffff20] bg-[#333350] p-4">
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
            onClick={async () => {
              await writeText(code.referral_value);
            }}
          />
        </div>
      </div>
      <Button
        className="mt-5 w-full"
        type="button"
        onClick={async () => {
          if(isValidUrl) {
            window.open(code.referral_value, "_blank")

          } else {

            await writeText(code.referral_value);
          }
        }}
      >
        {hasCopied
          ? "Copied!"
          : isValidUrl
            ? "Open Referral Link"
            : "Copy Referral Code"}
      </Button>
    </Form>
  );
}

export default ReferralViewOnly;

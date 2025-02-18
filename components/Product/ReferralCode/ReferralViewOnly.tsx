"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Button from "../../Global/Button";
import Form from "../../Global/FormComponents/Form";
import Input from "../../Global/FormComponents/Input";
import CompanyLogo from "../CompanyLogo";
import Image from "next/image";
import { useClipboard } from "@/hooks/useClipboard";
import clsx from "clsx";
import { createClient } from "@/utils/supabase/client";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { getClientProfile } from "@/utils/getClientProfile";
import { isValidURL } from "@/utils/isValidURL";

function ReferralViewOnly({ ...code }: UserCodeWithRelations) {
  const [writeText, hasCopied] = useClipboard();
  const supabase = createClient();

  
  const isValidUrl = isValidURL(code.referral_value);

  const sendConversionNotification = async () => {
    const { user } = await getClientProfile();
    if (!user) return;
    const { data, error } = await supabase
      .from("notifications")
      .insert({
        type:"code_interaction",
        recipient: code.user_id,
        triggered_by: user.id,
        used_referral: code.id,
      });
    if (!error) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  return (
    <Form
      initialValues={{ referralCode: code.referral_value! }}
      onSubmit={() => {}}
    >
      <div className="relative rounded-xl border-1 border-[#ffffff20] bg-[#333350] p-4">
        <div className="flex size-full flex-col items-center justify-center">
          <div className="relative">
            {hasCopied && (
              <Realistic
                onInit={({ confetti }) =>
                  confetti({
                    colors: ["#FF00B2", "#D900FF", "#ffffff"],
                    startVelocity: 30,
                    ticks: 60,
                    spread: 60,
                    disableForReducedMotion: true,
                    particleCount: 40,
                  })
                }
              />
            )}
            <div className="flex size-[80px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px]">
              <CompanyLogo src={code.companies.logo_url} size={"xl"} />
            </div>
          </div>
          <h3 className="mt-[10px] w-full truncate text-[19px] font-semibold text-white">
            {code.companies.name}
          </h3>
          <p className="text-[15px] text-[#a1a3ae]">
            {isValidUrl ? "Open the referral link" : "Copy the referral code"}{" "}
            from this user below and redeem it at {code.companies.name}! 👇👇
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
            className={clsx(
              "absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-75 active:scale-90",
              {
                "opacity-30": hasCopied,
              },
            )}
            onClick={async () => {
              await writeText(code.referral_value);
              await supabase.rpc("increment_conversion_count", {
                user_code_id: code.id,
              });
              await sendConversionNotification();
            }}
          />
        </div>
      </div>
      <Button
        className="mt-5 w-full"
        type="button"
        onClick={async () => {
          await sendConversionNotification();
          await supabase.rpc("increment_conversion_count", {
            user_code_id: code.id,
          });
          if (isValidUrl) {
            const url = code.referral_value.startsWith("http")
              ? code.referral_value
              : `https://${code.referral_value}`;
            window.open(url, "_blank");
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

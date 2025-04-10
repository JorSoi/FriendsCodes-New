"use client";

import Input from "../../Global/FormComponents/Input";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Form from "../../Global/FormComponents/Form";
import * as Yup from "yup";
import Image from "next/image";
import Button from "../../Global/Button";
import { FormikHelpers, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { UserCodeWithRelations } from "@/types/general.types";
import CompanyLogo from "../CompanyLogo";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/components/Global/Modal";
import Tag from "@/components/Global/FormComponents/Tag";
import { useClipboard } from "@/hooks/useClipboard";
import { getClientProfile } from "@/utils/getClientProfile";
import { Tables } from "@/types/database.types";
import { cn } from "@/utils/variants";

function ReferralUpdateForm({ ...code }: UserCodeWithRelations) {
  const router = useRouter();
  const supabase = createClient();
  const closeModal = useContext(ModalContext);
  const [writeText, hasCopied] = useClipboard();
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const [isPinned, setIsPinned] = useState(!!code.pinned_at);

  useEffect(() => {
    async function setProfileState() {
      const { profile } = await getClientProfile();
      setProfile(profile);
    }
    setProfileState();
  }, []);

  const updateCode = async (
    values: FormikValues,
    { setFieldError }: FormikHelpers<FormikValues>,
  ) => {
    if (
      code.referral_reward === values.referralReward &&
      code.referral_description === values.referralDescription &&
      code.referral_value === values.referralValue &&
      !!code.pinned_at == isPinned
    ) {
      setFieldError("referralValue", "No values have been changed!");
      return;
    }
    const { error } = await supabase
      .from("user_codes")
      .update({
        referral_value: values.referralValue,
        referral_description: values.referralDescription,
        referral_reward: values.referralReward,
        pinned_at: determinePinnedAt(),
      })
      .eq("id", code.id);
    if (!error) {
      await closeModal?.();
      router.refresh();
    } else {
      console.log(error);
    }
  };

  const deleteCode = async () => {
    const { error } = await supabase
      .from("user_codes")
      .delete()
      .eq("id", code.id);
    if (!error) {
      closeModal?.();
      router.refresh();
    } else {
      console.log(error);
    }
  };

  //Sets or removes pinned_at time from the usercode
  const determinePinnedAt = () => {
    if (!code.pinned_at && isPinned) {
      return new Date().toLocaleString();
    } else if (code.pinned_at && !isPinned) {
      return null;
    } else {
      return code.pinned_at;
    }
  };

  return (
    <Form
      onSubmit={updateCode}
      initialValues={{
        referralValue: code.referral_value,
        referralReward: code.referral_reward,
        referralDescription: code.referral_description,
      }}
      validationSchema={Yup.object().shape({
        referralValue: Yup.string().required("Code or Link Required"),
      })}
    >
      <div className="relative flex w-full flex-col gap-3 rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
        <div className="absolute right-3 top-3 flex gap-2">
          <button
            type="button"
            className={cn(
              "group/pin flex size-9 items-center justify-center rounded-xl border-1 border-[#5e6081] transition-colors hover:bg-white/10",
              { "bg-[#434565]": isPinned },
            )}
            onClick={() => setIsPinned(!isPinned)}
            data-umami-event="prod-share-referral"
            data-umami-event-company-name={code.companies.name}
          >
            <Image
              src={isPinned ? "/icons/pinned.svg" : "/icons/pin.svg"}
              width={18}
              height={18}
              alt="pin icon"
              className="opacity-60 transition-transform group-active/pin:translate-y-1"
            />
          </button>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-xl border-1 border-[#5e6081] transition-colors hover:bg-white/10"
            onClick={async () => {
              writeText(
                `${window.origin}/${profile?.user_name}?referral=${encodeURIComponent(code.companies.name)}`,
              );
            }}
            data-umami-event="prod-share-referral"
            data-umami-event-company-name={code.companies.name}
          >
            <Image
              src={hasCopied ? "/icons/checkmark.svg" : "/icons/link.svg"}
              width={16}
              height={16}
              alt="share icon"
              className="opacity-60"
            />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a] p-1">
            <CompanyLogo src={code.companies.logo_url} size={"md"} />
          </div>
          <div className="text-left">
            <p className="max-w-[300px] truncate text-[17px] font-semibold text-white">
              {code.companies.name}
            </p>
            <p className="text-[14px] text-[#9496A1]">
              Created {getTimeAgo(code.created_at)}
            </p>
          </div>
        </div>
        <div className="flex w-full flex-wrap gap-2">
          <Tag
            placeholder="e.g. $10 off"
            emoji="🎁"
            title="Add Reward Info"
            maxLength={40}
            name="referralReward"
            initialValue={code.referral_reward!}
            isEditable
          />
          <Tag
            placeholder="e.g. expiry, guide, tips"
            emoji="✏️"
            title="Add Description"
            maxLength={250}
            name="referralDescription"
            initialValue={code.referral_description!}
            isEditable
          />
        </div>
      </div>
      <div className="ml-4 h-4 w-4 bg-[#333350]"></div>

      <div className="rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a]">
            <Image
              src={"/icons/referral-code.png"}
              width={40}
              height={40}
              alt="20"
            />
          </div>
          <div className="text-left">
            <p className="text-[17px] font-semibold text-white">
              Modify Code or Link
            </p>
            <p className="text-[14px] text-[#9496A1]">
              Paste updated link or code here.
            </p>
          </div>
        </div>
        <Input
          type="text"
          name="referralValue"
          className="border-[2.4px] border-dashed border-[#5c6484] pr-9 text-white"
          placeholder="e.g. https://refer.amazon.com/jorsoi13"
          autoComplete="off"
        />
      </div>
      <div className="mt-5 flex gap-3">
        <Button
          type="button"
          variant={"secondary"}
          onClick={deleteCode}
          data-umami-event="prod-referral-deletion"
        >
          <Image src={"/icons/trash.svg"} width={20} height={20} alt="" />
        </Button>
        <Button className="flex-grow" type="submit">
          Update
        </Button>
      </div>
    </Form>
  );
}

export default ReferralUpdateForm;

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
import { useContext } from "react";
import { ModalContext } from "@/components/Global/Modal";
import Tag from "@/components/Global/FormComponents/Tag";

function ReferralUpdateForm({ ...code }: UserCodeWithRelations) {
  const router = useRouter();
  const closeModal = useContext(ModalContext);

  const updateCode = async (
    values: FormikValues,
    { setFieldError }: FormikHelpers<FormikValues>,
  ) => {
    if (
      code.referral_reward === values.referralReward &&
      code.referral_description === values.referralDescription &&
      code.referral_value === values.referralValue
    ) {
      setFieldError("referralValue", "No values have been changed!");
      return;
    }
    const supabase = createClient();
    const { error } = await supabase
      .from("user_codes")
      .update({
        referral_value: values.referralValue,
        referral_description: values.referralDescription,
        referral_reward: values.referralReward,
      })
      .eq("id", code.id);
    if (!error) {
      closeModal?.();
      router.refresh();
    } else {
      console.log(error);
    }
  };

  const deleteCode = async () => {
    const supabase = createClient();
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

  return (
    <Form
      onSubmit={updateCode}
      initialValues={{
        referralValue: code.referral_value!,
        referralReward: code.referral_reward!,
        referralDescription: code.referral_description!,
      }}
      validationSchema={Yup.object().shape({
        referralValue: Yup.string().required("Code or Link Required"),
      })}
    >
      <div className="w-full space-y-3 rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
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

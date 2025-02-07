"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Image from "next/image";
import Modal from "../Global/Modal";
import { useModal } from "@/hooks/useModal";
import clsx from "clsx";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Input from "../Global/FormComponents/Input";
import Form from "../Global/FormComponents/Form";
import Button from "../Global/Button";
import * as Yup from "yup";
import { createClient } from "@/utils/supabase/client";
import { FormikValues } from "formik";
import { useRouter } from "next/navigation";

function ReferralCode({ ...code }: UserCodeWithRelations) {
  const { modalRef, openModal, closeModal } = useModal();
  const router = useRouter();

  const updateCode = async (values: FormikValues) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("user_codes")
      .update({ referral_value: values.referralCode })
      .eq("id", code.id);
    if (!error) {
      closeModal();
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
      closeModal();
      router.refresh();
    } else {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => {
        openModal();
      }}
      className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-[#3e405b76] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px] sm:rounded-md border-1 border-[#ffffff10]"
    >
      <div className="flex size-full flex-col items-center justify-center">
        <Image
          className="h-full max-h-[55px] w-auto max-w-[85px] rounded-md object-contain transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px] sm:max-w-[65px]"
          src={code.companies?.logo_url || "/icons/shop.svg"}
          width={90}
          height={90}
          alt=""
          draggable={false}
        />

        <p className="mt-[10px] w-full truncate font-medium">
          {code.companies.name}
        </p>
      </div>

      <Modal
        ref={modalRef}
        closeModal={closeModal}
        className="w-full max-w-[400px]"
      >
        <Form
          onSubmit={updateCode}
          initialValues={{ referralCode: code.referral_value! }}
          validationSchema={Yup.object().shape({
            referralCode: Yup.string()
              .required("Code Required")
              .notOneOf([code.referral_value], "Cant be the same as before"),
          })}
        >
          <div className="w-full rounded-xl border-1 border-[#ffffff20] bg-[#30354A] p-3">
            <div className="flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-lg border-1 border-[#ffffff1b] bg-[#484E68]">
                <Image
                  className={clsx(
                    "h-full max-h-[35px] w-auto max-w-[40px] shrink-0 rounded-sm object-contain",
                    {
                      "max-h-[27px]": !code.companies.logo_url,
                    },
                  )}
                  src={code.companies.logo_url || "/icons/shop.svg"}
                  width={40}
                  height={40}
                  alt="20"
                />
              </div>
              <div className="text-left">
                <p className="max-w-[300px] truncate text-[17px] font-semibold text-white">
                  {code.companies.name}
                </p>
                <p className="text-[13px] text-[#9496A1]">
                  Created {getTimeAgo(code.created_at)}
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 h-4 w-4 bg-[#30354A]"></div>

          <div className="rounded-xl border-1 border-[#ffffff20] bg-[#30354A] p-3">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-lg border-1 border-[#ffffff1b] bg-[#484E68]">
                <Image
                  src={"/icons/referral-code.svg"}
                  width={40}
                  height={40}
                  alt="20"
                />
              </div>
              <div className="text-left">
                <p className="text-[17px] font-semibold text-white">
                  Modify Code or Link
                </p>
                <p className="text-[13px] text-[#9496A1]">
                  Paste updated link or code here.
                </p>
              </div>
            </div>
            <Input
              type="text"
              name="referralCode"
              className="border-[1.5px] border-dashed border-[#5c6484] pr-9 text-white"
              placeholder="e.g. https://refer.amazon.com/jorsoi13"
              autoComplete="off"
            />
          </div>
          <div className="mt-5 flex gap-3">
            <Button type="button" variant={"secondary"} onClick={deleteCode}>
              <Image src={"/icons/trash.svg"} width={20} height={20} alt="" />
            </Button>
            <Button className="flex-grow" type="submit">
              Update
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default ReferralCode;

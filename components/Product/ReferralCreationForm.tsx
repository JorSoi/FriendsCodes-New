import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Input from "../Global/FormComponents/Input";
import Form from "../Global/FormComponents/Form";
import Button from "../Global/Button";
import CompanyDrowdown from "./CompanyDrowdown";
import { Tables } from "@/types/database.types";
import clsx from "clsx";
import * as Yup from "yup";
import { createClient } from "@/utils/supabase/client";
import { FormikValues } from "formik";
import { getClientProfile } from "@/utils/getClientProfile";
import { useRouter } from "next/navigation";

function ReferralCreationForm({
  closeModal,
  setFireWork,
}: {
  closeModal: () => void;
  setFireWork: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedCompany, setSelectedCompany] =
    useState<Tables<"companies"> | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: FormikValues) => {
    const supabase = createClient();
    const { user } = await getClientProfile();
    const { data, error } = await supabase
      .from("user_codes")
      .insert({
        company_id: selectedCompany!.id,
        referral_value: values.referralCode,
        user_id: user?.id,
      })
      .select("*");
    if (!error) {
      console.log(data);
      router.refresh();
      closeModal();
      setFireWork(true);
    } else {
      console.log(error);
    }
  };

  return (
    <Form
      initialValues={{ company: "", referralCode: "" }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        company: Yup.string()
          .matches(/^(?!https?:\/\/).*$/, "Company name cannot be a URL")
          .min(2, "Too short")
          .required("Store is required"),
        referralCode: Yup.string().required("Password is required"),
      })}
    >
      <div className="rounded-xl bg-[#30354A] p-3 border-1 border-[#ffffff20]">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-lg border-1 border-[#ffffff1b] bg-[#484E68]">
            {selectedCompany ? (
              <Image
                className={clsx(
                  "h-full max-h-[35px] w-auto max-w-[40px] rounded-sm",
                  {
                    "max-h-[27px]": !selectedCompany.logo_url,
                  },
                )}
                src={selectedCompany.logo_url || "/icons/shop.svg"}
                width={40}
                height={40}
                alt="20"
              />
            ) : (
              <Image
                src={"/icons/select-store.svg"}
                width={30}
                height={30}
                alt="20"
              />
            )}
          </div>
          <div className="text-left">
            <p className="max-w-[300px] truncate text-[17px] font-semibold text-white">
              {selectedCompany ? selectedCompany.name : "Select a Store"}
            </p>
            <p className="text-[#9496A1] text-[14px]">
              Choose the store for your referral code.
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/icons/chevron-selector.svg"}
            width={11}
            height={11}
            alt=""
            className="absolute right-3 top-[17px] opacity-50"
          />
          <Input
            type="text"
            name="company"
            className="border-[1.5px] border-[#5c6484] pr-9 text-white"
            placeholder="Select store name"
            autoComplete="off"
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 100)}
          />
          {isDropdownOpen && (
            <CompanyDrowdown
              setSelectedCompany={setSelectedCompany}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          )}
        </div>
      </div>
      <div className="ml-4 h-4 w-4 bg-[#30354A]"></div>

      <div className="rounded-xl bg-[#30354A] p-3 border-1 border-[#ffffff20]">
        <div className="mb-3 flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-lg border-1 border-[#ffffff1b] bg-[#484E68]">
            <Image
              src={"/icons/referral-code.svg"}
              width={35}
              height={35}
              alt="20"
            />
          </div>
          <div className="text-left">
            <p className="text-[17px] font-semibold text-white">
              Insert Code or Link
            </p>
            <p className="text-[#9496A1] text-[14px]">
              Paste your referral link or code here.
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
      <Button type="submit" className="mt-5 w-full">
        Add your new referral
      </Button>
    </Form>
  );
}

export default ReferralCreationForm;

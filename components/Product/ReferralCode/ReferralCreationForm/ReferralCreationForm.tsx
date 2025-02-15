import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import Input from "../../../Global/FormComponents/Input";
import Form from "../../../Global/FormComponents/Form";
import Button from "../../../Global/Button";
import { Tables } from "@/types/database.types";
import * as Yup from "yup";
import { createClient } from "@/utils/supabase/client";
import { FormikHelpers, FormikValues } from "formik";
import { getClientProfile } from "@/utils/getClientProfile";
import { useRouter } from "next/navigation";
import Modal from "@/components/Global/Modal";
import { useModal } from "@/hooks/useModal";
import CompanySearch from "./CompanySearch";
import CompanyLogo from "../../CompanyLogo";

function ReferralCreationForm({
  closeModal,
  setFireWork,
}: {
  closeModal: () => void;
  setFireWork: Dispatch<SetStateAction<boolean>>;
}) {
  const [company, setCompany] = useState<Tables<"companies"> | null>(null);
  const { openModal, closeModal: closeSearchModal, modalRef } = useModal();
  const router = useRouter();

  const handleSubmit = async (
    values: FormikValues,
    { resetForm, setFieldError }: FormikHelpers<FormikValues>,
  ) => {
    const supabase = createClient();
    const { user } = await getClientProfile();

    const checkIfCompanyExists = async (company: Tables<"companies">) => {
      if (company.id == 0) {
        //New company creations via the company search are labeled with an id of 0. This symbolizes that the company is not existant yet and must be created prior to referencing it in a user_code.
        const { data, error } = await supabase
          .from("companies")
          .insert({
            name: company.name,
          })
          .select()
          .single();
        if (!error) {
          console.log(data);
          createUserCode(data);
        } else {
          console.log(error);
        }
      } else {
        createUserCode(company);
      }
    };

    const createUserCode = async (company: Tables<"companies">) => {
      const { error } = await supabase
        .from("user_codes")
        .insert({
          company_id: company.id,
          referral_value: values.referralCode,
          user_id: user?.id,
        })
        .select("*");
      if (!error) {
        router.refresh();
        closeModal();
        setFireWork(true);
        resetForm();
        setCompany(null);
      } else {
        console.log(error);
        setFieldError("company", "Couldn't add referral to profile!");
      }
    };

    if (company) {
      console.log("state not empty, check if company exists now!");
      checkIfCompanyExists(company);
    }
  };

  return (
    <>
      <Form
        initialValues={{ company: "", referralCode: "", searchValue: "" }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          company: Yup.string()
            .matches(/^(?!https?:\/\/).*$/, "Company name cannot be a URL")
            .min(2, "Name is too short")
            .max(30, "Name is too long")
            .required("Store is required"),
          referralCode: Yup.string().required("Referral code or link required"),
        })}
      >
        <div className="rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a] p-1">
              {company ? (
                <CompanyLogo src={company.logo_url} size={"md"} />
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
                {company ? company.name : "Select a Store"}
              </p>
              <p className="text-[14px] text-[#9496A1]">
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
              className="cursor-pointer border-[1.5px] border-[#5c6484] pr-9 text-white focus:placeholder-[#73727E]"
              placeholder="Select store name"
              autoComplete="off"
              readOnly
              onClick={openModal}
            />
          </div>
        </div>
        <div className="ml-4 h-4 w-4 bg-[#333350]"></div>

        <div className="rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
          <div className="mb-3 flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a]">
              <Image
                src={"/icons/referral-code.png"}
                width={38}
                height={38}
                alt="20"
              />
            </div>
            <div className="text-left">
              <p className="text-[17px] font-semibold text-white">
                Insert Code or Link
              </p>
              <p className="text-[14px] text-[#9496A1]">
                Paste your referral link or code here.
              </p>
            </div>
          </div>

          <Input
            type="text"
            name="referralCode"
            className="border-[2.4px] border-dashed border-[#5c6484] pr-9 text-white"
            placeholder="e.g. https://refer.amazon.com/jorsoi13"
            autoComplete="off"
          />
        </div>
        <Button type="submit" className="mt-5 w-full">
          Add your new referral
        </Button>
        <Modal
          ref={modalRef}
          closeModal={closeSearchModal}
          className="w-full max-w-[700px] sm:m-0"
        >
          <CompanySearch
            closeModal={closeSearchModal}
            setCompany={setCompany}
          />
        </Modal>
      </Form>
    </>
  );
}

export default ReferralCreationForm;

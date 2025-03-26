"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import { useContext } from "react";
import { FireWorkContext } from "@/components/Global/FireWorkContext";
import { ModalContext } from "@/components/Global/Modal";
import Image from "next/image";
import Input from "../../../Global/FormComponents/Input";
import Form from "../../../Global/FormComponents/Form";
import Button from "../../../Global/Button";
import Modal from "@/components/Global/Modal";
import CompanySearch from "./CompanySearch";
import CompanyLogo from "../../CompanyLogo";
import Tag from "@/components/Global/FormComponents/Tag";
import * as Yup from "yup";
import { createClient } from "@/utils/supabase/client";
import { Tables } from "@/types/database.types";
import { FormikHelpers, FormikValues } from "formik";
import { getClientProfile } from "@/utils/getClientProfile";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/variants";

function ReferralCreationForm() {
  const [companyList, setCompanyList] = useState<Tables<"companies">[]>([]);
  const [selectedCompany, setSelectedCompany] =
    useState<Tables<"companies"> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { openModal, closeModal: closeSearchModal, ...modalProps } = useModal();
  const triggerFireWork = useContext(FireWorkContext);
  const closeModal = useContext(ModalContext);
  const router = useRouter();

  useEffect(() => {
    const getCompanies = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("companies")
        .select()
        .neq("status", "reviewing")
        .neq("status", "private");

      if (!error) {
        setCompanyList(data);
      } else {
        console.log(error);
      }
    };

    getCompanies();
  }, []);

  const handleSubmit = async (
    values: FormikValues,
    { setFieldError }: FormikHelpers<FormikValues>,
  ) => {
    setIsLoading(true);
    const supabase = createClient();
    const { user } = await getClientProfile();

    const checkIfCompanyExists = async (
      selectedCompany: Tables<"companies">,
    ) => {
      if (selectedCompany.id == 0) {
        //New company creations via the company search are labeled with an id of 0. This symbolizes that the company is not existant yet and must be created prior to referencing it in a user_code.
        const { data, error } = await supabase
          .from("companies")
          .insert({
            name: selectedCompany.name,
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
        createUserCode(selectedCompany);
      }
    };

    const createUserCode = async (selectedCompany: Tables<"companies">) => {
      if (!user) return;
      const { error } = await supabase
        .from("user_codes")
        .insert({
          company_id: selectedCompany.id,
          referral_value: values.referralValue,
          referral_reward: values.referralReward,
          referral_description: values.referralDescription,
          user_id: user?.id,
        })
        .select("*");
      if (!error) {
        router.refresh();
        closeModal?.();
        triggerFireWork?.();
      } else {
        console.log(error);
        setFieldError("company", "Couldn't add referral to profile!");
      }
    };

    if (selectedCompany) {
      console.log("state not empty, check if company exists now!");
      checkIfCompanyExists(selectedCompany);
    }
  };

  return (
    <>
      <Form
        initialValues={{
          company: "",
          referralValue: "",
          searchValue: "",
          referralReward: "",
          referralDescription: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          company: Yup.string()
            .matches(/^(?!https?:\/\/).*$/, "Company name cannot be a URL")
            .min(2, "Name is too short")
            .max(30, "Name is too long")
            .required("Company is required"),
          referralValue: Yup.string().required("Referral code or link required"),
        })}
      >
        <div className="space-y-3 rounded-2xl border-1 border-[#ffffff20] bg-[#333350] p-3">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a] p-1">
              {selectedCompany ? (
                <CompanyLogo src={selectedCompany.logo_url} size={"md"} />
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
                {selectedCompany ? selectedCompany.name : "Select a Company"}
              </p>
              <p className="text-[14px] text-[#9496A1]">
                Choose the company for your referral code.
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
              placeholder="Select company name"
              autoComplete="off"
              readOnly
              onClick={openModal}
              onBlur={() => {}}
            />
          </div>
          <div
            className={cn(
              "flex w-full flex-wrap gap-2",
              !selectedCompany && "hidden",
            )}
          >
            <Tag
              placeholder="e.g. $10 off"
              emoji="🎁"
              content="Add Reward"
              maxLength={40}
              name="referralReward"
            />
            <Tag
              placeholder="e.g. expiry, guide, tips"
              emoji="✏️"
              content="Add Description"
              maxLength={200}
              name="referralDescription"
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
            name="referralValue"
            className="border-[2.4px] border-dashed border-[#5c6484] pr-9 text-white"
            placeholder="e.g. https://refer.amazon.com/jorsoi13"
            autoComplete="off"
          />
        </div>
        <Button
          type="submit"
          className="mt-5 w-full"
          data-umami-event="prod-referral-creation"
          loading={isLoading}
        >
          Add your new referral
        </Button>
        <Modal
          {...modalProps}
          closeModal={closeSearchModal}
          className="w-full max-w-[700px] sm:m-0"
        >
          <CompanySearch
            setSelectedCompany={setSelectedCompany}
            companyList={companyList}
          />
        </Modal>
      </Form>
    </>
  );
}

export default ReferralCreationForm;

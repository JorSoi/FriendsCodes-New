"use client";

import Input from "@/components/Global/FormComponents/Input";
import Image from "next/image";
import CompanySearchList from "./CompanySearchList";
import { Dispatch, SetStateAction, useState } from "react";
import { Tables } from "@/types/database.types";
import Button from "@/components/Global/Button";
import { ModalContext } from "@/components/Global/Modal";
import { useContext } from "react";
import Category from "../../Category";
import CompanyLogo from "../../CompanyLogo";
import { useFormikContext } from "formik";

function CompanySearch({
  setSelectedCompany,
  companyList,
}: {
  setSelectedCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  companyList: Tables<"companies">[];
}) {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const closeModal = useContext(ModalContext);
  const {
    setFieldValue,
    values: { searchValue },
  } = useFormikContext<{ searchValue: string }>();

  const selectCompany = (company: Tables<"companies">) => {
    setSelectedCompany(company);
    closeModal?.();
    setFieldValue("company", company.name);
  };

  const handleCategorySelection = (category: string) => {
    setActiveCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove the category
          : [...prev, category], // Add the category
    );
  };

  return (
    <div className="flex w-full max-w-[700px] flex-col rounded-3xl border-1 border-[#ffffff20] bg-[#333350] sm:h-dvh sm:rounded-none">
      {/* Searchbar */}
      <div className="relative flex w-full cursor-text items-center px-5 pt-3">
        <div className="relative w-full">
          <Input
            name="searchValue"
            type="search"
            placeholder="Search company you want to refer"
            size={"full"}
            className="font-figtreea pl-8 text-base"
            variant={"ghost"}
            autoComplete="off"
            autoFocus
          />
          <Image
            src={"/icons/search.svg"}
            width={18}
            height={18}
            alt=""
            className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 select-none"
            draggable={false}
          />
        </div>
        {/* <div className="w-full h-[20%] bg-gradient-to-b from-[#333350] via-[#3333505e] via-[70%] to-[#33335000] absolute top-full inset-x-0 z-10"></div> */}
        <Button
          variant={"ghost"}
          type="button"
          onClick={() => closeModal?.()}
          className="hidden px-1 text-base font-semibold sm:block"
        >
          Cancel
        </Button>
      </div>
      <div className="flex w-full gap-2 overflow-x-scroll scroll-smooth px-5 pb-4 pt-2 scrollbar-hide">
        {[
          "banking",
          "crypto",
          "shopping",
          "mobility",
          "education",
          "fitness",
          "food",
          "games",
          "housing",
          "software",
          "travel",
          "other",
        ].map((category) => (
          <Category
            key={category}
            categoryName={category}
            isActive={activeCategories.includes(category)}
            variant={
              activeCategories.includes(category) ? "active" : "inactive"
            }
            onClick={() => handleCategorySelection(category)}
          />
        ))}
      </div>
      <div className="[&::-webkit-scrollbar-track]:transparent max-h-[70svh] overflow-y-auto overflow-x-hidden pb-3 xl:max-h-[50svh] sm:h-full sm:max-h-none [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#25253b] [&::-webkit-scrollbar-thumb]:pr-2 [&::-webkit-scrollbar]:w-2">
        {!searchValue && activeCategories.length == 0 && (
          <>
            <h4 className=" pl-5 text-left text-sm font-medium text-[#ffffff80]">
              Currently Popular
            </h4>
            <div className="overflow-x-scroll scroll-smooth px-5 pb-5 scrollbar-hide pt-3">
              <div className="flex w-fit gap-2 [&_img]:shrink-0">
                {companyList
                  .filter((company) => company.highlighted)
                  .map((company) => (
                    <div
                      key={company.id}
                      className="cursor-pointer"
                      onClick={() => selectCompany(company)}
                    >
                      <CompanyLogo size={"lg"} src={company.logo_url} />
                    </div>
                  ))}
              </div>
            </div>
          </>
        )}
        <CompanySearchList
          selectCompany={selectCompany}
          companyList={companyList}
          activeCategories={activeCategories}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
}

export default CompanySearch;

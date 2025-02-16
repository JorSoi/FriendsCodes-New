"use client";

import Input from "@/components/Global/FormComponents/Input";
import Image from "next/image";
import CompanySearchList from "./CompanySearchList";
import { Dispatch, SetStateAction } from "react";
import { Tables } from "@/types/database.types";
import Button from "@/components/Global/Button";

function CompanySearch({
  setCompany,
  closeModal,
}: {
  setCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  closeModal: () => void;
}) {
  return (
    <div className="flex w-full max-w-[700px] flex-col rounded-3xl border-1 border-[#ffffff20] bg-[#333350] sm:h-dvh sm:rounded-none">
      {/* Searchbar */}
      <div className="relative flex w-full cursor-text items-center px-5 pb-1 pt-3">
        <div className="relative w-full">
          <Input
            name="searchValue"
            type="search"
            placeholder="Search store you want to add"
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
          onClick={() => closeModal()}
          className="hidden px-1 text-base font-semibold sm:block"
        >
          Cancel
        </Button>
      </div>
      <CompanySearchList setCompany={setCompany} />
    </div>
  );
}

export default CompanySearch;

"use client"

import { useFormikContext } from "formik";
import Image from "next/image";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { Tables } from "@/types/database.types";

function DropdownItem({
  setSelectedCompany,
  setIsDropdownOpen,
  ...company
}: {
  setSelectedCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
} & Tables<"companies">) {
  const { setFieldValue } = useFormikContext();

  return (
    <div
      className="flex items-center gap-4 rounded-md p-3 hover:bg-[#ffffff20]"
      onClick={() => {
        setSelectedCompany(company);
        setFieldValue("company", company.name);
        setIsDropdownOpen(false);
      }}
    >
      <Image
        src={company.logo_url || "/icons/shop.svg"}
        width={25}
        height={25}
        alt=""
        className="shrink-0 rounded-[4px]"
      />
      <p className="truncate text-[14px] text-white">{company.name}</p>
    </div>
  );
}

export default DropdownItem;

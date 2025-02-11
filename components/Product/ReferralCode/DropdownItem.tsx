"use client";

import { useFormikContext } from "formik";
import { Dispatch } from "react";
import { SetStateAction } from "react";
import { Tables } from "@/types/database.types";
import CompanyLogo from "../CompanyLogo";

function DropdownItem({
  setSelectedCompany,
  setIsDropdownOpen,
  ...company
}: {
  setSelectedCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
} & Tables<"companies">) {
  const { setFieldValue, values } = useFormikContext();

  return (
    <div
      className="flex items-center gap-4 rounded-md p-3 hover:bg-[#ffffff20]"
      onMouseDown={() => {
        setSelectedCompany(company);
        setFieldValue("company", company.name);
        console.log(values);
        setIsDropdownOpen(false);
      }}
    >
      <CompanyLogo src={company.logo_url} size={"xs"} />
      <p className="truncate text-[14px] text-white">{company.name}</p>
    </div>
  );
}

export default DropdownItem;

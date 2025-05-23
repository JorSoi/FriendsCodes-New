"use client";

import { Tables } from "@/types/database.types";
import { createClient } from "@/utils/supabase/client";
import { useFormikContext } from "formik";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

function CompanyDrowdown({
  setSelectedCompany,
  setIsDropdownOpen,
}: {
  setSelectedCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    values,
  }: {
    values: {
      company: string;
      code: string;
    };
  } = useFormikContext();
  const [companyList, setCompanyList] = useState<Tables<"companies">[]>([]);

  useEffect(() => {
    const getCompanies = async (company: string) => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("companies")
        .select()
        .ilike("name", `%${company}%`)
        
      if (!error) {
        setCompanyList(data);
      } else {
        console.log(error);
      }
    };

    getCompanies(values.company);
  }, [values]);

  return (
    <div className="absolute top-full z-[10001] mt-2 max-h-[50svh] w-full overflow-y-auto rounded-md border-1 border-[#ffffff40] bg-[#333350] p-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#4b526d] [&::-webkit-scrollbar-track]:bg-[#ffffff0d] [&::-webkit-scrollbar]:w-2 shadow-lg shadow-[#24243954]">
      {companyList.map(({ ...company }) => {
        return (
          <DropdownItem
            key={company.id}
            {...company}
            setSelectedCompany={setSelectedCompany}
            setIsDropdownOpen={setIsDropdownOpen}
          />
        );
      })}
    </div>
  );
}

export default CompanyDrowdown;

import { useFormikContext } from "formik";

import { useEffect, useState, useContext, useMemo } from "react";
import { Tables } from "@/types/database.types";
import { createClient } from "@/utils/supabase/client";
import CompanySearchItem from "./CompanySearchItem";
import { Dispatch, SetStateAction } from "react";
import { ModalContext } from "@/components/Global/Modal";

function CompanySearchList({
  setCompany,
}: {
  setCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
}) {
  const {
    values: { searchValue },
  }: { values: { searchValue: string } } = useFormikContext();
  const [companyList, setCompanyList] = useState<Tables<"companies">[]>([]);
  const closeModal = useContext(ModalContext);
  const { setFieldValue } = useFormikContext();

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

  // Filters data based on the complete dataset (companyList), whenever searchValue changes
  const filteredCompanies = useMemo(() => {
    if (!searchValue) return companyList;
    return companyList.filter((company) =>
      company.name?.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [companyList, searchValue]);

  const selectCompany = (company: Tables<"companies">) => {
    setCompany(company);
    closeModal?.();
    setFieldValue("company", company.name);
  };

  return (
    <div className="[&::-webkit-scrollbar-track]:transparent max-h-[70svh] overflow-y-auto overflow-x-hidden px-3 pb-3 xl:max-h-[40svh] sm:h-full sm:max-h-none [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#25253b] [&::-webkit-scrollbar-thumb]:pr-2 [&::-webkit-scrollbar]:w-2">
      {filteredCompanies.map(({ ...company }) => {
        return (
          <CompanySearchItem
            key={company.id}
            onClick={() => selectCompany(company)}
            title={company.name}
            description={`Benefits: ${company.benefits ?? "10% discount on next signup"}`}
            imageSrc={company.logo_url}
          />
        );
      })}
      {searchValue &&
        !companyList.some(
          (el) => el.name?.toLowerCase() == searchValue.toLowerCase(),
        ) && (
          <div className="mt-3">
            <h5 className="mb-1 ml-2 text-left text-[14px] font-medium text-[#ffffff7c]">
              Looking for another store?
            </h5>
            <CompanySearchItem
              onClick={() =>
                selectCompany({
                  id: 0,
                  created_at: "",
                  name: searchValue,
                  logo_url: null,
                  benefits: null,
                  status: "reviewing",
                })
              }
              title={`"${searchValue}"`}
              description={"Add the store, we add the details later!"}
            />
          </div>
        )}
    </div>
  );
}

export default CompanySearchList;

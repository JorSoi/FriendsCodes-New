import { useFormikContext } from "formik";
import Fuse from "fuse.js";
import { useContext, useMemo } from "react";
import { Tables } from "@/types/database.types";
import CompanySearchItem from "./CompanySearchItem";
import { Dispatch, SetStateAction } from "react";
import { ModalContext } from "@/components/Global/Modal";

function CompanySearchList({
  setSelectedCompany,
  companyList,
}: {
  setSelectedCompany: Dispatch<SetStateAction<Tables<"companies"> | null>>;
  companyList: Tables<"companies">[];
}) {
  const {
    values: { searchValue },
  }: { values: { searchValue: string } } = useFormikContext();
  const closeModal = useContext(ModalContext);
  const { setFieldValue } = useFormikContext();

  // Filters data based on the complete dataset (companyList), whenever searchValue changes
  const filteredCompanies = useMemo(() => {
    if (!searchValue) {
      return companyList;
    } else {
      const fuse = new Fuse(companyList, {
        ignoreDiacritics: true,
        threshold: 0.35,
        includeScore: false,
        includeMatches: false,
        keys: ["name"],
      });
      return fuse.search(searchValue).map(({ item }) => item);
    }
  }, [companyList, searchValue]);

  const selectCompany = (company: Tables<"companies">) => {
    setSelectedCompany(company);
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
            description={company.description}
            imageSrc={company.logo_url}
          />
        );
      })}
      {searchValue &&
        /\S/.test(searchValue) &&
        !companyList.some(
          (el) => el.name?.toLowerCase() == searchValue.toLowerCase(),
        ) && (
          <div className="mt-3">
            <h5 className="mb-1 ml-2 text-left text-[14px] font-medium text-[#ffffff7c]">
              Looking for another company?
            </h5>
            <CompanySearchItem
              onClick={() =>
                selectCompany({
                  id: 0,
                  created_at: "",
                  name: searchValue.trim(),
                  logo_url: null,
                  description: null,
                  status: "reviewing",
                  company_url: "",
                })
              }
              title={`"${searchValue.trim()}"`}
              description={"Add the company, we add the details later!"}
            />
          </div>
        )}
    </div>
  );
}

export default CompanySearchList;

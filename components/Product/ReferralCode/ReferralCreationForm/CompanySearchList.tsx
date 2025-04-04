import Fuse from "fuse.js";
import { useMemo } from "react";
import { Tables } from "@/types/database.types";
import CompanySearchItem from "./CompanySearchItem";
import SpotlightList from "./SpotlightList";

function CompanySearchList({
  selectCompany,
  companyList,
  activeCategories,
  searchValue,
}: {
  selectCompany: (company: Tables<"companies">) => void;
  companyList: Tables<"companies">[];
  activeCategories: string[];
  searchValue: string;
}) {
  // Filters data based on the complete dataset (companyList), whenever searchValue changes
  const filteredCompanies = useMemo(() => {
    //If categories selected, only let fuse search the list prefiltered by the selected categories
    const prefilteredList =
      activeCategories.length > 0
        ? companyList.filter((company) =>
            company.company_categories?.some((category) =>
              activeCategories.includes(category),
            ),
          )
        : companyList;

    if (!searchValue) return prefilteredList;

    const fuse = new Fuse(prefilteredList, {
      ignoreDiacritics: true,
      threshold: 0.35,
      includeScore: false,
      includeMatches: false,
      keys: ["name"],
    });
    return fuse.search(searchValue).map(({ item }) => item);
  }, [companyList, searchValue, activeCategories]);

  return (
    <div className="[&::-webkit-scrollbar-track]:transparent max-h-[70svh] overflow-y-auto overflow-x-hidden px-3 pb-3 xl:max-h-[40svh] sm:h-full sm:max-h-none [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#25253b] [&::-webkit-scrollbar-thumb]:pr-2 [&::-webkit-scrollbar]:w-2">

      <SpotlightList
        companyList={companyList}
        searchValue={searchValue}
        selectCompany={selectCompany}
        activeCategories={activeCategories}
      />

      <h5 className="mb-1 ml-2 text-left text-[14px] font-medium text-[#ffffff7c]">
        All companies
      </h5>
      {filteredCompanies.map(({ ...company }) => {
        return (
          <CompanySearchItem
            key={company.id}
            onClick={() => selectCompany(company)}
            title={company.name}
            subtitle={company.referral_usage_reward}
            imageSrc={company.logo_url}
            createdAt={company.created_at}
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
                  company_description: null,
                  company_categories: null,
                  spotlighted: null,
                  status: "reviewing",
                  company_url: "",
                  referral_sharing_reward: null,
                  referral_usage_reward: null,
                })
              }
              title={`"${searchValue.trim()}"`}
              subtitle={"Add the company, we add the details later!"}
            />
          </div>
        )}
    </div>
  );
}

export default CompanySearchList;

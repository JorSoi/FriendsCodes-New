import { Tables } from "@/types/database.types";
import CompanyLogo from "../../CompanyLogo";

function SpotlightList({
  searchValue,
  activeCategories,
  selectCompany,
  companyList,
}: {
  searchValue: string;
  selectCompany: (company: Tables<"companies">) => void;
  companyList: Tables<"companies">[];
  activeCategories: string[];
}) {
  return (
    <div className="px-2">
      {!searchValue && activeCategories.length == 0 && (
        <>
          <h4 className="text-left text-sm font-medium text-[#ffffff80]">
            Currently Popular
          </h4>
          <div className="overflow-x-scroll scroll-smooth pb-5 pt-3 scrollbar-hide">
            <div className="flex w-fit gap-2 [&_img]:shrink-0">
              {companyList
                .filter((company) => company.spotlighted)
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
    </div>
  );
}

export default SpotlightList;

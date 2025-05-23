"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import ReferralCode from "../ReferralCode/ReferralCode";
import AddItemButton from "../AddItemButton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function CodeList({
  userCodes,
  viewOnly = false,
  searchEnabled = true,
}: {
  userCodes: UserCodeWithRelations[] | null;
  viewOnly?: boolean;
  searchEnabled?: boolean;
}) {
  const searchParams = useSearchParams();
  const [list, setList] = useState(userCodes);

  useEffect(() => {
    //Exclude list from search filtering if it is view only. (Visitors should always see all user_codes in the preview of their friends even when they search for a specific company)
    if(!searchEnabled) return;
    const filterCodes = () => {
      const searchValue = searchParams.get("search")?.toLowerCase();

      if (searchValue && userCodes) {
        const searchResult = userCodes.filter((listItem) => {
          const companyName = listItem.companies.name!.toLowerCase();

          return companyName.includes(searchValue);
        });
        setList(searchResult);
      } else {
        setList(userCodes);
      }
    };

    filterCodes();
  }, [searchParams, userCodes]);

  return (
    <div className="grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2">
      {list?.map(({ ...referralCode }) => {
        return (
          <ReferralCode
            key={referralCode.id}
            {...referralCode}
            viewOnly={viewOnly}
          />
        );
      })}

      {!viewOnly && <AddItemButton />}
    </div>
  );
}

export default CodeList;

"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Modal from "../../Global/Modal";
import { useModal } from "@/hooks/useModal";
import ReferralUpdateForm from "./ReferralUpdateForm";
import ReferralViewOnly from "./ReferralViewOnly";
import CompanyLogo from "../CompanyLogo";
import clsx from "clsx";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function ReferralCode({
  viewOnly = false,
  ...code
}: UserCodeWithRelations & { viewOnly?: boolean }) {
  const { openModal, ...modalProps } = useModal();
  const supabase = createClient();
  const searchParams = useSearchParams();

  //Show referral immediately if referral-param specified in URL
  useEffect(() => {
    if (
      viewOnly &&
      searchParams.get("referral")?.toLowerCase() ===
        code.companies.name.toLowerCase()
    ) {
      openModal();
    }
  }, []);

  return (
    <div
      onClick={async () => {
        openModal();
        if (viewOnly) {
          const { data, error } = await supabase.rpc("increment_view_count", {
            user_code_id: code.id,
          });
          if (error) {
            console.log(error);
          } else {
            console.log(data);
          }
        }
      }}
      className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg border-1 border-[#ffffff10] bg-[#3e405b76] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px] sm:rounded-md"
    >
      <div className="flex size-full flex-col items-center justify-center">
        <div
          className={clsx({
            "flex size-[55px] items-center justify-center rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a] p-2":
              !code.companies.logo_url,
          })}
        >
          <CompanyLogo src={code.companies.logo_url} size={"lg"} />
        </div>

        <p className="mt-[10px] w-full truncate font-medium">
          {code.companies.name}
        </p>
      </div>

      {viewOnly ? (
        <Modal {...modalProps} className="w-full max-w-[340px]">
          <ReferralViewOnly {...code} />
        </Modal>
      ) : (
        <Modal {...modalProps} className="w-full max-w-[400px]">
          <ReferralUpdateForm {...code} />
        </Modal>
      )}
    </div>
  );
}

export default ReferralCode;

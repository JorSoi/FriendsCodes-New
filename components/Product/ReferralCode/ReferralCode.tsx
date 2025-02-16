"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Modal from "../../Global/Modal";
import { useModal } from "@/hooks/useModal";
import ReferralUpdateForm from "./ReferralUpdateForm";
import ReferralViewOnly from "./ReferralViewOnly";
import CompanyLogo from "../CompanyLogo";
import clsx from "clsx";

function ReferralCode({
  viewOnly = false,
  ...code
}: UserCodeWithRelations & { viewOnly?: boolean }) {
  const { modalRef, openModal, closeModal } = useModal();

  return (
    <div
      onClick={() => {
        openModal();
      }}
      className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg border-1 border-[#ffffff10] bg-[#3e405b76] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px] sm:rounded-md"
    >
      <div className="flex size-full flex-col items-center justify-center">
        <div
          className={clsx({
            "rounded-2xl border-1 border-[#ffffff1b] bg-[#47476a] p-2 size-[55px] flex justify-center items-center":
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
        <Modal
          ref={modalRef}
          closeModal={closeModal}
          className="w-full max-w-[340px]"
        >
          <ReferralViewOnly {...code} />
        </Modal>
      ) : (
        <Modal
          ref={modalRef}
          closeModal={closeModal}
          className="w-full max-w-[400px]"
        >
          <ReferralUpdateForm closeModal={closeModal} {...code} />
        </Modal>
      )}
    </div>
  );
}

export default ReferralCode;

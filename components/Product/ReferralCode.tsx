"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import Image from "next/image";
import Modal from "../Global/Modal";
import { useModal } from "@/hooks/useModal";
import ReferralUpdateForm from "./ReferralUpdateForm";
import ReferralViewOnly from "./ReferralViewOnly";

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
        <Image
          className="h-full max-h-[55px] w-auto max-w-[85px] rounded-md object-contain transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px] sm:max-w-[65px]"
          src={code.companies?.logo_url || "/icons/shop.svg"}
          width={90}
          height={90}
          alt=""
          draggable={false}
        />

        <p className="mt-[10px] w-full truncate font-medium">
          {code.companies.name}
        </p>
      </div>

      {viewOnly ? (
        <Modal
          ref={modalRef}
          closeModal={closeModal}
          className="w-full max-w-[400px]"
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

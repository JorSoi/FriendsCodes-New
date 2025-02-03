"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Image from "next/image";
import Modal from "../Global/Modal";
import { useModal } from "@/hooks/useModal";

function ReferralCode({ ...code }: UserCodeWithRelations) {
  const { modalRef, openModal, closeModal, isOpen } = useModal();

  return (
    <div
      onClick={() => {
        openModal();
        console.log("openModal running now");
      }}
      className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-[#3e405ba2] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px]"
    >
      <div className="flex size-full flex-col items-center justify-center">
        <Image
          className="object-scale-down h-full max-h-[55px] w-auto max-w-[85px] rounded-md transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px] sm:max-w-[65px]"
          src={code.companies.logo_url || "/icons/shop.svg"}
          width={90}
          height={90}
          alt=""
          draggable={false}
          
        />

        <p className="mt-[10px] w-full truncate font-medium">
          {code.companies.name}
        </p>
      </div>
      <Modal ref={modalRef} closeModal={closeModal} isOpen={isOpen}>
        <div className="w-svh flex max-w-[400px] flex-col items-center justify-center rounded-md bg-red-50">
          <Image
            className="h-full max-h-[55px] w-auto rounded-md transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px]"
            src={code.companies.logo_url || "/icons/shop.svg"}
            width={60}
            height={60}
            alt=""
            draggable={false}
          />
          <p>{code.companies.name}</p>
          <p>Code: {code.referral_value}</p>
          <p>Added {getTimeAgo(code.created_at)}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ReferralCode;

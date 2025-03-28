"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import Modal from "../Global/Modal";
import ReferralCreationForm from "./ReferralCode/ReferralCreationForm/ReferralCreationForm";
import { usePathname } from "next/navigation";
import FriendCreationForm from "./my-friends/FriendCreationForm";
import { cn } from "@/utils/variants";

function AddItemButton({ className }: { className?: string }) {
  const { openModal, ...modalProps } = useModal();
  const pathName = usePathname();

  return (
    <div
      onClick={openModal}
      className={cn(
        "flex min-h-[130px] w-full cursor-pointer items-center justify-center rounded-lg border-[3px] border-dashed border-[#DEE8FF28] bg-[#383D5816] p-5 text-center transition-colors hover:bg-[#383D5850] lg:p-[10px] md:min-h-[120px]",
        className,
      )}
    >
      <div className="rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] p-3 shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]">
        <Image
          src={"/icons/add.svg"}
          width={18}
          height={18}
          alt=""
          draggable="false"
        />
      </div>
      <Modal
        {...modalProps}
        className="w-full max-w-[400px]"
      >
        {pathName == "/home" ? (
          <ReferralCreationForm />
        ) : (
          <FriendCreationForm />
        )}
      </Modal>
    </div>
  );
}

export default AddItemButton;

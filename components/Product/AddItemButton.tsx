"use client";

import { useModal } from "@/hooks/useModal";
import Image from "next/image";
import Modal from "../Global/Modal";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useState } from "react";



import ReferralCreationForm from "./ReferralCreationForm";

function AddItemButton() {
  const { openModal, closeModal, isOpen, modalRef } = useModal();
    const [fireWork, setFireWork] = useState<boolean>(false);


  return (
    <div
      onClick={openModal}
      className="flex min-h-[130px] w-full cursor-pointer items-center justify-center rounded-lg border-[3px] border-dashed border-[#DEE8FF28] bg-[#383D5816] p-5 text-center transition-colors hover:bg-[#383D5850] lg:p-[10px] md:min-h-[120px]"
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
      <Modal closeModal={closeModal} isOpen={isOpen} ref={modalRef}>
        <ReferralCreationForm closeModal={closeModal} setFireWork={setFireWork}/>
      </Modal>
      {fireWork && <Fireworks autorun={{ speed: 3, duration: 2000, delay: 500}} />}
    </div>
  );
}

export default AddItemButton;

"use client";

import Button from "@/components/Global/Button";
import { useClipboard } from "@/hooks/useClipboard";
import Image from "next/image";
import { getClientProfile } from "@/utils/getClientProfile";
import { useModal } from "@/hooks/useModal";
import Modal from "@/components/Global/Modal";
import FriendCreationForm from "@/components/Product/my-friends/FriendCreationForm";
import { useEffect, useState } from "react";
import { Tables } from "@/types/database.types";

function EmptyState() {
  const [writeText, hasCopied] = useClipboard();
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const { closeModal, openModal, modalRef } = useModal();

    useEffect(() => {
      async function setProfileState() {
        const { profile } = await getClientProfile();
        setProfile(profile);
      }
      setProfileState();
    }, []);

  return (
    <div className="relative">
      <div className="relative z-10 flex flex-col text-center sm:[&_.decorationImg]:hidden">
        <h1 className="text-xl font-bold">Add your first friend!</h1>
        <p className="mt-2 max-w-[400px] space-y-2 text-[#a1a3ae]">
          Invite friends to maximize chances of finding and using referrals
          whenever needed! 🙌 👥
        </p>
        <div className="mt-8 flex gap-3 xs:flex-col-reverse">
          <Button
            type="button"
            variant={"secondary"}
            className="flex grow-[1] basis-0 justify-center gap-2"
            onClick={async () =>
              writeText(`${window.origin}/${profile?.user_name}`)
            }
          >
            <Image src={"/icons/link.svg"} width={20} height={20} alt="" />
            {hasCopied ? "Copied!" : "Use invitation link"}
          </Button>
          <Button className="grow-[1] basis-0" onClick={() => openModal()}>
            Search friend
          </Button>
        </div>

        <Image
          className="decorationImg absolute right-[-30px] top-[-20px] size-[40px] rounded-full border-2 border-[#ffffffa9] object-cover"
          src={"/users/user-1.jpg"}
          width={400}
          height={400}
          alt=""
          draggable="false"
        />
        <Image
          className="decorationImg absolute right-[50px] top-[-110px] size-[55px] rounded-full border-2 border-[#ffffffa9] object-cover"
          src={"/users/user-2.jpg"}
          width={400}
          height={400}
          alt=""
          draggable="false"
        />
        <Image
          className="decorationImg absolute left-[60px] top-[-124px] size-[60px] touch-none rounded-full border-2 border-[#ffffffa9] object-cover"
          src={"/users/user-4.jpg"}
          width={400}
          height={400}
          alt=""
          draggable="false"
        />
        <Image
          className="decorationImg absolute left-[-30px] top-[-25px] size-[45px] touch-none rounded-full border-2 border-[#ffffffa9] object-cover"
          src={"/users/user-3.jpg"}
          width={400}
          height={400}
          alt=""
          draggable="false"
        />
      </div>

      {/* Circle Decoration */}

      <div className="absolute left-1/2 top-1/2 flex size-[450px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff09] to-[#ffffff00] sm:hidden">
        <div className="flex size-[70%] items-center justify-center rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff09] to-[#ffffff00] to-[75%]">
          <div className="size-[60%] rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff07] to-[#ffffff00] to-[90%]"></div>
        </div>
      </div>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        className="w-full max-w-[400px]"
      >
        <FriendCreationForm />
      </Modal>
    </div>
  );
}

export default EmptyState;

"use client";

import { useModal } from "@/hooks/useModal";
import { FriendWithCodes } from "@/types/general.types";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Image from "next/image";
import Modal from "../../Global/Modal";
import CodeContainer from "../../Global/CodeContainer";
import CodeList from "../my-codes/CodeList";
import Button from "../../Global/Button";
import CompanyLogo from "../CompanyLogo";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

function FriendsCard({ ...friend }: FriendWithCodes) {
  const router = useRouter();
  const { openModal, closeModal, modalRef } = useModal();

  const deleteFriend = async () => {
    const supabase = createClient();
    const { error } = await supabase
      .from("friends")
      .delete()
      .eq("friend_id", friend.profile.id);
    if (!error) {
      router.refresh();
      closeModal();
    } else {
      console.log(error);
    }
  };

  return (
    <div
      onClick={() => openModal()}
      className="group relative max-h-[180px] min-h-[130px] w-full cursor-pointer overflow-hidden rounded-lg border-1 border-[#ffffff10] bg-[#2F304A] p-3 transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:max-h-[150px] sm:rounded-md"
    >
      <div className="grid grid-cols-4 flex-wrap justify-items-center gap-2 sm:gap-1">
        {friend.user_codes.map((user_code) => {
          return (
            <div
              key={user_code.id}
              className="flex items-center justify-center rounded-md border-1 border-[#ffffff10] bg-[#444560dd]"
            >
              <CompanyLogo src={user_code.companies.logo_url} size={"sm"} />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F304A] via-[#2f304aea] via-70% to-[#2f304a00] px-5 py-5 lg:p-[10px]">
        <p className="mt-[10px] w-full truncate font-semibold text-white">
          @{friend.profile.user_name}
        </p>
        <p className="text-[13px] text-[#9496A1]">
          Added {getTimeAgo(friend.created_at)}
        </p>
      </div>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-full max-w-[480px] rounded-full border-1 border-[#ffffff10] bg-[#21203d] p-2 pr-4 xs:px-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex gap-4" onClick={closeModal}>
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#ffffff10] xs:hidden [&_img]:-translate-x-px [&_img]:rotate-180">
                <Image src={"icons/chevron.svg"} width={7} height={7} alt="" />
              </div>
              <div>
                <p className="w-full truncate font-semibold text-white">
                  @{friend.profile.user_name}
                </p>
                <p className="text-[13px] text-[#9496A1] xs:hidden">
                  Friend since {getTimeAgo(friend.created_at)}
                </p>
              </div>
            </div>
            <div className="flex gap-px">
              <Button
                variant={"ghost"}
                className="flex size-10 items-center justify-center p-[unset]"
                onClick={() => {
                  window.open(`/${friend.profile.user_name}`, "_blank");
                }}
              >
                <Image src={"icons/share.svg"} width={17} height={17} alt="" />
              </Button>
              <Button
                variant={"ghost"}
                className="flex size-10 items-center justify-center p-[unset]"
                onClick={deleteFriend}
              >
                <Image
                  src={"icons/remove-user.svg"}
                  width={17}
                  height={17}
                  alt=""
                />
              </Button>
            </div>
          </div>
          <div></div>
        </div>
        <CodeContainer>
          <CodeList userCodes={friend.user_codes} viewOnly={true} />
        </CodeContainer>
      </Modal>
    </div>
  );
}

export default FriendsCard;

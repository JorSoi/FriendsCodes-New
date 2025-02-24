"use client";

import { useModal } from "@/hooks/useModal";
import { FriendWithCodes } from "@/types/general.types";
import { getTimeAgo } from "@/utils/getTimeAgo";
import Image from "next/image";
import Modal from "../../../Global/Modal";
import CodeContainer from "../../../Global/CodeContainer";
import CodeList from "../../my-codes/CodeList";
import Button from "../../../Global/Button";
import CompanyLogo from "../../CompanyLogo";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import EmptyState from "./EmptyState";

function FriendsCard({ ...friend }: FriendWithCodes) {
  const router = useRouter();
  const { openModal, closeModal, modalRef } = useModal();
  const isNew = getTimeAgo(friend.created_at).match(/minute|now/);
  const searchParam = useSearchParams().get("search");
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const hasUserCodes = friend.user_codes.length > 0;

  //All companies will be highlighted if the searchValue matches their company name
  useEffect(() => {
    if (searchParam) {
      setSearchValue(searchParam.toLowerCase());
    } else {
      setSearchValue(null);
    }
  }, [searchParam]);

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
      <div className="grid grid-cols-4 flex-wrap justify-items-center gap-2">
        {friend.user_codes.map((user_code) => {
          return (
            <div
              key={user_code.id}
              className={clsx(
                "flex size-[35px] shrink-0 items-center justify-center",
                {
                  "rounded-[10px] border border-[#ffffff1b] bg-[#47476a] p-2":
                    !user_code.companies.logo_url,
                  "rounded-xl border-[1.5px] !border-[#ff00b3] outline outline-[3px] outline-[#ff00b37b]":
                    searchValue &&
                    user_code.companies.name
                      ?.toLowerCase()
                      .includes(searchValue),
                },
              )}
            >
              <CompanyLogo src={user_code.companies.logo_url} size={"sm"} />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2F304A] via-[#2f304af2] via-70% to-[#2f304a00] px-3 py-3 pt-4 lg:p-[10px]">
        <p className="mt-[10px] flex w-full items-center truncate font-semibold text-white">
          @{friend.profile.user_name}
          {isNew && (
            <span className="ml-2 rounded-lg bg-gradient-to-b from-[#FF00B2] to-[#D900FF] px-2 py-1 text-[11px] font-medium text-white shadow-[inset_-2px_3px_2px_-1px_#ffffff70]">
              New!
            </span>
          )}
        </p>
        <p className="text-[12px] text-[#9496A1]">
          {getTimeAgo(friend.created_at)}
        </p>
      </div>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        className="flex w-full max-w-[850px] flex-col items-center gap-4"
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
                data-umami-event="prod-friend-deletion"
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
        <CodeContainer variant={hasUserCodes ? "block" : "center"}>
          {hasUserCodes ? (
            <CodeList
              userCodes={friend.user_codes}
              viewOnly
              searchEnabled={false}
            />
          ) : (
            <EmptyState profileName={friend.profile.user_name} />
          )}
        </CodeContainer>
      </Modal>
    </div>
  );
}

export default FriendsCard;

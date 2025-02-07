"use client";

import Form from "../Global/FormComponents/Form";
import Input from "../Global/FormComponents/Input";
import Link from "next/link";
import Image from "next/image";
import Button from "../Global/Button";
import { useModal } from "@/hooks/useModal";
import Modal from "../Global/Modal";
import { useState, useEffect } from "react";
import { getClientProfile } from "@/utils/getClientProfile";
import { Tables } from "@/types/database.types";


function ShareProfile() {
  const { modalRef, closeModal, openModal } = useModal();
  const [hasCopied, setHasCopied] = useState(false);
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);

  useEffect(() => {
    async function setProfileState() {
      const { profile } = await getClientProfile();
      setProfile(profile);
    }
    setProfileState();
  }, []);

  const handleClick = async () => {
    try {
      if (false) {
        await navigator.share({
          title: "Share my referral codes!",
          url: window.origin + `/${profile!.user_name}`,
        });
      } else {
        openModal();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 xs:w-[94%]"
      >
        <Image
          src={"/icons/share.svg"}
          width={17}
          height={17}
          alt=""
          draggable="false"
        />
        Share my profile
      </Button>
      <Modal ref={modalRef} closeModal={closeModal} className="max-w-[400px]">
        <div className="w-full rounded-xl border-1 border-[#ffffff20] bg-[#30354A] p-3">
          <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-[#0B081D] bg-[url(/auth-bg-decoration.webp)] bg-cover bg-[center_bottom_0px] p-5 text-center">
            <Image src={"/logo.png"} width={50} height={50} alt="" />
            <h3 className="text-lg font-semibold">@{profile?.user_name}</h3>
            <p className="text-sm text-[#ffffff9f]">
              Add the profile in your social bios to remind your friends to use
              your referral codes!
            </p>
          </div>

          <Form
            onSubmit={() => {}}
            initialValues={{
              profileLink: window.origin + `/${profile?.user_name}`,
            }}
          >
            <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] justify-items-center gap-4 [&_a]:flex [&_a]:size-[60px] [&_a]:items-center [&_a]:justify-center [&_a]:rounded-full [&_a]:bg-[#3d425a] [&_img]:cursor-pointer">
              <Link href={`https://`} target="_blank">
                <Image
                  src={"/company-logos/reddit.svg"}
                  width={28}
                  height={28}
                  alt=""
                />
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u&quote=Take a look at my referral codes using this link: ${window.origin}/${profile?.user_name}`}
                target="_blank"
              >
                <Image
                  src={"/company-logos/facebook.svg"}
                  width={28}
                  height={28}
                  alt=""
                />
              </Link>
              <Link
                href={`https://telegram.me/share/url?url=${window.origin}/${profile?.user_name}&text=Check out my profile on FriendsCodes!`}
                target="_blank"
              >
                <Image
                  src={"/company-logos/telegram.svg"}
                  width={27}
                  height={27}
                  alt=""
                  className="-translate-x-[2px]"
                />
              </Link>
              <Link
                href={`whatsapp://send?text=Take a look at my referral codes using this link: ${window.origin}/${profile?.user_name}`}
                target="_blank"
              >
                <Image
                  src={"/company-logos/whatsapp.svg"}
                  width={27}
                  height={27}
                  alt=""
                />
              </Link>
              <Link
                href={`http://twitter.com/share?text=Take a look at my referral codes using this link: &url=${window.origin}/${profile?.user_name}&hashtags=referralCodes, referral, redeem`}
                target="_blank"
              >
                <Image
                  src={"/company-logos/twitter.svg"}
                  width={20}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            <Input
              name="profileLink"
              type="text"
              label="Or copy link"
              value={window.origin + "/" + profile?.user_name || ""}
              readOnly
              className="border-[#ffffff50]"
            />
            <Button
              className="mt-4 w-full"
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.origin}/${profile?.user_name}`,
                );
                setHasCopied(true);
              }}
            >
              {hasCopied ? "Copied" : "Copy Link"}
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default ShareProfile;

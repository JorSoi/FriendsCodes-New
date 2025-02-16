"use client";

import Form from "../../Global/FormComponents/Form";
import Input from "../../Global/FormComponents/Input";
import Image from "next/image";
import Button from "../../Global/Button";
import { useModal } from "@/hooks/useModal";
import Modal from "../../Global/Modal";
import { useState, useEffect } from "react";
import { getClientProfile } from "@/utils/getClientProfile";
import { Tables } from "@/types/database.types";
import { useClipboard } from "@/hooks/useClipboard";
import { shareSocials } from "@/lib/shareSocials";

function ShareProfile() {
  const { modalRef, closeModal, openModal } = useModal();
  const [writeText, hasCopied] = useClipboard();
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const socials = shareSocials(
    "Take a look at my referral codes",
    `${window.origin}/${profile?.user_name}`,
  );

  useEffect(() => {
    async function setProfileState() {
      const { profile } = await getClientProfile();
      setProfile(profile);
    }
    setProfileState();
  }, []);

  return (
    <div className="absolute bottom-0 inset-x-0 h-[100px] xs:h-[80px] flex justify-center items-center">
      <Button
        onClick={openModal}
        className=" flex items-center justify-center gap-2 xs:w-[94%]"
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
            <div className="my-4 grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-2">
              {socials.map(({ company, href }) => {
                return (
                  <Button
                    key={company}
                    variant={"outline"}
                    size={"sm"}
                    className="flex h-[50px] w-full items-center justify-center"
                    onClick={() => window.open(href, "_blank")}
                  >
                    <Image
                      src={`/company-logos/${company}.svg`}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </Button>
                );
              })}
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
              onClick={async () =>
                writeText(`${window.origin}/${profile?.user_name}`)
              }
            >
              {hasCopied ? "Copied!" : "Copy profile link"}
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
}

export default ShareProfile;

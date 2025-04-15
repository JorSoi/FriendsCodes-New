"use client";

import Form from "@/components/Global/FormComponents/Form";
import Input from "@/components/Global/FormComponents/Input";
import TextArea from "@/components/Global/FormComponents/TextArea";
import { Tables } from "@/types/database.types";
import { SettingsSections } from "@/types/general.types";

import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AccountSettings({
  scrollContainerRef,
  setActiveSection,
  profile,
}: {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  setActiveSection: Dispatch<SetStateAction<SettingsSections>>;
  profile: Tables<"profiles"> | null;
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
    root: scrollContainerRef?.current || null,
    initialInView: true,
  });

  useEffect(() => {
    if (inView) setActiveSection("account");
  }, [inView]);
  return (
    <Form
      enableReinitialize
      initialValues={{
        displayName: profile?.display_name ?? profile?.user_name,
        profile_description: profile?.profile_description,
      }}
      onSubmit={() => {}}
    >
      <div id="account-settings" ref={ref} className="scroll-mt-4">
        <h1 className="pb-5 text-2xl font-semibold">Account Settings</h1>
        <div className="flex flex-col gap-4">
          <Input
            name="displayName"
            type="text"
            variant={"filled"}
            size={"full"}
            placeholder="yourname"
            label="Display Name"
            className="opacity-100"
            disabled
          />

          <TextArea
            name="profile_description"
            label="Profile Bio"
            variant={"filled"}
            size={"full"}
            maxLength={1000}
            className="pr-10 opacity-100"
            placeholder="Customize your profile description"
            disabled
            rows={3}
          />
          <div>
            <p className="mb-1 text-[15px] font-medium">E-Mail Address</p>
            <p className="text-[15px] text-white/60">{profile?.email}</p>
          </div>
          <div>
            <p className="mb-1 text-[15px] font-medium">Delete account</p>
            <p className="text-[15px] text-white/60 underline-offset-2">
              For permanent deletion, contact us: hello@friendscodes.de
            </p>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default AccountSettings;

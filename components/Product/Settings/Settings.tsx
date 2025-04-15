"use client";

import Image from "next/image";
import AccountSettings from "./AccountSettings";
import PreferenceSettings from "./PreferenceSettings";
import SettingsNavItem from "./SettingsNavItem";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SettingsSections } from "@/types/general.types";
import Button from "@/components/Global/Button";
import { ModalContext } from "@/components/Global/Modal";
import { Tables } from "@/types/database.types";
import { getClientProfile } from "@/utils/getClientProfile";

function Settings() {
  const [profile, setProfile] = useState<Tables<"profiles"> | null>(null);
  const [activeSection, setActiveSection] =
    useState<SettingsSections>("account");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const closeModal = useContext(ModalContext);

  useEffect(() => {
    async function setProfileState() {
      const { profile } = await getClientProfile();

      if (profile) {
        setProfile(profile);
      }
    }
    setProfileState();
  }, []);

  return (
    <div className="flex w-full max-w-[700px] gap-3 rounded-3xl border-1 border-[#ffffff20] bg-[#333350] pl-3 sm:h-dvh sm:flex-col sm:rounded-none sm:px-3">
      {/* Sidebar */}
      <aside className="flex w-full max-w-[30%] flex-col justify-between py-3 sm:max-w-full sm:flex-row sm:pb-0">
        <div className="flex flex-col gap-1 sm:flex-row">
          <SettingsNavItem
            isActive={activeSection === "account"}
            onClick={() => setActiveSection("account")}
            sectionName="account-settings"
          >
            <Image width={20} height={20} src={"/icons/test-user.svg"} alt="" />
            <p>Account</p>
          </SettingsNavItem>
          <SettingsNavItem
            isActive={activeSection === "preferences"}
            onClick={() => setActiveSection("preferences")}
            sectionName="preference-settings"
          >
            <Image width={20} height={20} src={"/icons/toggle.svg"} alt="" />
            <p>Preferences</p>
          </SettingsNavItem>
          {/* <SettingsNavItem
            isActive={activeSection === "billing"}
            onClick={() => setActiveSection("billing")}
            sectionName="billing"
          >
            <Image width={20} height={20} src={"/icons/credit-card.svg"} alt="" />
            <p>Billing</p>
          </SettingsNavItem> */}
        </div>
        <Button
          variant={"ghost"}
          type="button"
          onClick={() => closeModal?.()}
          className="hidden px-1 text-base font-semibold sm:block"
        >
          Back
        </Button>
        <div className="flex gap-3 pb-1 pl-1 text-[14px] text-white/60 decoration-white/60 sm:hidden">
          <Link href={"/privacy-policy"} target="_blank">
            Privacy Policy
          </Link>
          <Link href={"/terms"} target="_blank">
            Terms
          </Link>
        </div>
      </aside>

      {/* Actual Content */}
      <div
        className="flex max-h-[60svh] flex-col gap-10 overflow-y-scroll scroll-smooth scrollbar-hide sm:max-h-none"
        ref={scrollContainerRef}
      >
        <div className="flex flex-col gap-20 py-4 pl-1 pr-5 sm:px-0">
          <AccountSettings
            profile={profile}
            scrollContainerRef={scrollContainerRef}
            setActiveSection={setActiveSection}
          />
          <PreferenceSettings
            profile={profile}
            scrollContainerRef={scrollContainerRef}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;

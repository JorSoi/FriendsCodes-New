"use client";

import Form from "@/components/Global/FormComponents/Form";
import Toggle from "@/components/Global/FormComponents/Toggle";
import { Tables } from "@/types/database.types";
import { EmailPreferences, SettingsSections } from "@/types/general.types";
import { createClient } from "@/utils/supabase/client";
import { FormikValues } from "formik";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function PreferenceSettings({
  scrollContainerRef,
  setActiveSection,
  profile,
}: {
  scrollContainerRef?: RefObject<HTMLDivElement | null>;
  setActiveSection?: Dispatch<SetStateAction<SettingsSections>>;
  profile: Tables<"profiles"> | null;
}) {
  const supabase = createClient();

  const email_preferences = profile?.email_preferences as EmailPreferences;

  const { ref, inView } = useInView({
    threshold: 0.8,
    root: scrollContainerRef?.current || null,
  });

  useEffect(() => {
    if (inView && setActiveSection) {
      setActiveSection("preferences");
    }
  }, [inView]);

  const updateEmailPreferences = async ({
    product_updates,
    referral_conversions,
    friends,
    misc,
  }: FormikValues) => {
    console.log({
      product_updates,
      referral_conversions,
      friends,
      misc,
    });
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          email_preferences: {
            product_updates,
            referral_conversions,
            friends,
            misc,
          },
        })
        .eq("id", profile!.id);
      if (error) console.log(error);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div ref={ref} id="preference-settings">
      <Form
        enableReinitialize
        initialValues={{
          product_updates: email_preferences?.product_updates,
          referral_conversions: email_preferences?.referral_conversions,
          friends: email_preferences?.friends,
          misc: email_preferences?.misc,
        }}
        onSubmit={updateEmailPreferences}
      >
        <h1 className="pb-5 text-2xl font-semibold">Preferences</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-[10%]">
            <div>
              <p className="text-[15px] font-medium">Referral Alerts 🎁</p>
              <p className="text-[14px] text-white/60">
                Get notified when your referrals have been copied or opened by
                another user.
              </p>
            </div>
            <Toggle name="referral_conversions" />
          </div>
          <div className="flex items-center justify-between gap-[10%]">
            <div>
              <p className="text-[15px] font-medium">New friends 👥</p>
              <p className="text-[14px] text-white/60">
                Get notified when you have been added to the watchlist of
                another user.
              </p>
            </div>
            <Toggle name="friends" />
          </div>{" "}
          <div className="flex items-center justify-between gap-[10%]">
            <div>
              <p className="text-[15px] font-medium">
                Product Updates / News 📣
              </p>
              <p className="text-[14px] text-white/60">
                Stay up to date when new features are coming out
              </p>
            </div>
            <Toggle name="product_updates" />
          </div>{" "}
          <div className="flex items-center justify-between gap-[10%]">
            <div>
              <p className="text-[15px] font-medium">
                Tips, Tricks & Suggestions 💡
              </p>
              <p className="text-[14px] text-white/60">
                Learn how to increase your referral conversions & more.
              </p>
            </div>
            <Toggle name="misc" />
          </div>
        </div>
      </Form>
    </div>
  );
}

export default PreferenceSettings;

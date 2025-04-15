import { FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import { Database, Tables } from "./database.types";
import { Ref } from "react";

//Used to provide type safety for formik functionality in the Form Component.
export interface FormProps {
  initialValues: FormikValues;
  onSubmit: (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>,
  ) => void;
  validationSchema?: Yup.ObjectSchema<FormikValues>;
  autoComplete?: "on" | "off";
  enableReinitialize?: boolean;
  children: React.ReactNode;
}

//Used for Notification Components and defines a SELECT from public.notifications with various joins that must be chained to the default "notifications" type in order to provide type safety.
export type NotificationWithRelations = Tables<"notifications"> & {
  profiles: Tables<"profiles">;
  user_codes:
    | (Tables<"user_codes"> & {
        companies: Tables<"companies">;
      })
    | null; // Nullable if used_referral is optional
};

//Used for Referral Code Components and defines a SELECT from public.user_codes with various joins that must be chained to the default "user_code" type in order to provide type safety.
export type UserCodeWithRelations = Tables<"user_codes"> & {
  companies: Tables<"companies">;
};

//Types for rpc function to get friends with their respective user codes
export type FriendWithCodes = {
  created_at: string; // Timestamp from the friends table
  profile: Tables<"profiles">;
  user_codes: UserCodeWithRelations[];
};

//Types for Referral Conversion Email Delivery Service
export type NotificationResults = {
  user: string | null;
  status: "error" | "success";
  error?: string;
  convertedReferrals?: Database["public"]["Functions"]["retrieve_referrals_for_email_notification"]["Returns"];
}[];

export type EmailPreferences = {
  referral_conversions: boolean;
  friends: boolean;
  product_updates: boolean;
  misc: boolean;
};

export type SettingsSections = "account" | "preferences" | "billing";

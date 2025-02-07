import { FormikHelpers } from "formik";
import * as Yup from "yup";
import { Tables } from "./database.types";


//Used to provide type safety for formik functionality in the Form Component. 
export interface FormValues {
  [key: string]: string; 
}
export interface FormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
  validationSchema?: Yup.ObjectSchema<FormValues>;
  children: React.ReactNode;
}


//Used for Notification Components and defines a SELECT from public.notifications with various joins that must be chained to the default "notifications" type in order to provide type safety. 
export type NotificationWithRelations = Tables<"notifications"> & {
  profiles: Tables<"profiles">;
  user_codes: (Tables<"user_codes"> & {
    companies: Tables<"companies">;
  }) | null; // Nullable if used_referral is optional
};


//Used for Referral Code Components and defines a SELECT from public.user_codes with various joins that must be chained to the default "user_code" type in order to provide type safety. 
export type UserCodeWithRelations = Tables<"user_codes"> & {
  companies: (Tables<"companies">)
};


//Types for rpc function to get friends with their respective user codes
export type FriendWithCodes = {
  created_at: string; // Timestamp from the friends table
  profile: Tables<"profiles">
  user_codes: UserCodeWithRelations[];
};
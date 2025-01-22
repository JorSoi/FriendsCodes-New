import { FormikHelpers } from "formik";
import * as Yup from "yup";

export interface FormValues {
  [key: string]: string; // or any other appropriate structure for your form data
}

export interface FormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
  validationSchema?: Yup.ObjectSchema<FormValues>; // Type for Yup validation schema
  children: React.ReactNode;
}

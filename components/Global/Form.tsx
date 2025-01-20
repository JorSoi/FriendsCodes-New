"use client";

import { Formik, Form as FormikForm, FormikHelpers } from "formik"; //Renamed "Form" element to FormikForm to give my own component a more concise name
import * as Yup from "yup";

interface FormValues {
  [key: string]: string; // or any other appropriate structure for your form data
}

interface FormProps {
  initialValues: FormValues;
  onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => void;
  validationSchema: Yup.ObjectSchema<FormValues>; // Type for Yup validation schema
  children: React.ReactNode;
}

function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

export default Form;

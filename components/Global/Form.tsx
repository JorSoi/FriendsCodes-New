"use client";

import { Formik, Form as FormikForm } from "formik"; //Renamed "Form" element to FormikForm to give my own component a more concise name


function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: {
  initialValues: { [key: string]: string };
  onSubmit: (values: any, actions: any) => any;
  validationSchema: any;
  children: React.ReactNode;
}) {
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

"use client";

import { Formik, Form as FormikForm } from "formik"; //Renamed "Form" element to FormikForm to give my own component a more concise name
import { FormProps } from "@/types/general.types";

/* 
1. This custom form component wraps the entire formik logic making it highly reuasble across the application
2. Simply nest any form element into the Form component to benefit from the entire form management by formik. Note: the form elements must  have useFields() formik hook implemented in order to communicate with the wrapping formik form components. Otherwise it will not work.
3. The form component takes 3 props: initialValues, onSubmit() and optionally a validationSchema. These are the values you would usually insert into the Formik component anyways.
4. Make sure to give each input field a name, since formik requires this to link the field to its form state. 
5. Also make sure to set the type attr on the button to let formik trigger the onSubmit() function in that case.
*/

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

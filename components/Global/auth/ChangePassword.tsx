import Image from "next/image";
import * as Yup from "yup";
import Form from "../FormComponents/Form";
import Input from "../FormComponents/Input";
import Button from "../Button";
import { FormikHelpers, FormikValues } from "formik";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

function ChangePassword() {

  const supabase = createClient();
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      ),
    confirmPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character",
      )
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Required"),
  });

  const handleSubmit = async (values: FormikValues, {setFieldError, resetForm} : FormikHelpers<FormikValues>) => {
    const { data, error } = await supabase.auth.updateUser({
      password: values.password
    })
    if(!error) {
      console.log(data)
      resetForm()
      router.push('/home')
    } else {
      console.log(error)
      setFieldError("confirmPassword", `Couldn't change password: ${error.message}`)
    }
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative flex w-full justify-center pb-7">
        <div className="flex size-[56px] items-center justify-center overflow-hidden rounded-lg border-1 border-[#ffffff15] bg-gradient-to-b from-[#ffffff26] to-[#ffffff05] backdrop-blur-[30px]">
          <h3 className="text-2xl">🔑</h3>
        </div>

        <Image
          className="absolute top-1/2 z-[-1] size-[330px] -translate-y-[45%] select-none"
          src={`/auth-bg-decoration.webp`}
          width={506}
          height={506}
          alt=""
          draggable={false}
        />
      </div>

      <div className="mb-5 flex flex-col items-center text-center">
        <h3 className="text-[22px] font-semibold text-white">
          Set your new password
        </h3>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          Your new password must be different to previously used passwords.
        </p>
      </div>

      {/* Form Fields */}
      <Form
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="w-full space-y-3">
          <Input
            name="password"
            type="password"
            variant={"outline"}
            size={"md"}
            placeholder="Enter new password..."
            label="New Password"
            required
          />
          <Input
            name="confirmPassword"
            type="password"
            variant={"outline"}
            size={"md"}
            placeholder="Confirm new password..."
            label="Confirm New Password"
            required
          />
        </div>
        <Button type="submit" className="mt-5 w-full">
          Update password
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassword;

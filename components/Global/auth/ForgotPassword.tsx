import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import Form from "../FormComponents/Form";
import Input from "../FormComponents/Input";
import Button from "../Button";

function PasswordResetForm() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleSubmit = (values: { [key: string]: string }) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="w-full max-w-[400px]">
      <div className="relative flex w-full justify-center pb-7">
        <div className="flex size-[56px] items-center justify-center overflow-hidden rounded-lg border-1 border-[#ffffff15] bg-gradient-to-b from-[#ffffff26] to-[#ffffff05] backdrop-blur-[30px]">
          <h3 className="text-2xl">🔐</h3>
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
        <div className="flex- flex">
          <h3 className="text-[22px] font-semibold text-white">
            Forgot your password?
          </h3>
        </div>
        <p className="mt-2 max-w-[400px] text-[#A9A6B2]">
          No worries, we&apos;ll send you reset instructions.
        </p>
      </div>

      {/* Form Fields */}
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          type="email"
          variant={"outline"}
          size={"md"}
          placeholder="Enter your email..."
          label="Email"
          required
        />

        <Button type="submit" className="mt-5 w-full">
          Send Recovery Email
        </Button>
      </Form>

      <div className="mt-4 flex w-full justify-center">
        <Link
          href={"/auth/login"}
          className="group flex gap-3 text-center font-inter text-[14px] text-[#908F99] underline-offset-2 transition-colors hover:text-white hover:underline"
        >
          <Image
            className="rotate-180 opacity-50 group-hover:opacity-100"
            src={"/icons/chevron.svg"}
            width={6}
            height={6}
            alt=""
            draggable={false}
          />
          Back to login
        </Link>
      </div>
    </div>
  );
}

export default PasswordResetForm;

"use client";

import { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";

const inputVariants = cva(
  "p-3 rounded-lg font-inter text-[14px] w-full max-w-[400px] transition-[colors, shadow] duration-[300ms] appearance-none autofill:bg-transparent",
  {
    variants: {
      variant: {
        outline:
          "bg-transparent border-1 border-[#262537] placeholder-[#ffffff87] focus:placeholder-[#39374f] outline-[#ffffff17] focus:border-[#9291b7] focus:outline-none focus:shadow-[0px_0px_0px_3px_#ffffff20]",
        error:
          "!border-red-500 border-1 bg-transparent outline-none shadow-[0px_0px_0px_3px_#FF000050]",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, // Exclude native size attribute
    VariantProps<typeof inputVariants> {
  label?: string; //Only populate when label wanted
  name: string; // Critical: Formik needs name attr to link input to form state managed by formik.
}

function Input({ className, size, variant, label, ...props }: InputProps) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error; // Condition for error

  return (
    <div >
      {label && (
        <label
          htmlFor={props.type}
          className="mb-1 block font-figtree text-[14px] font-medium text-left"
        >
          {label}
        </label>
      )}
      <input
        id={props.type}
        {...field}
        {...props}
        className={twMerge(
          inputVariants({ variant: isError ? "error" : variant, size }),
          className,
        )}
      />
      {isError && (
        <div className="mt-1 text-[12px] text-red-500 text-left">{meta.error}</div>
      )}
    </div>
  );
}

export default Input;

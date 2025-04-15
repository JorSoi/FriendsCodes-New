"use client";

import { TextareaHTMLAttributes, Ref } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";

const TextAreaVariants = cva(
  "p-3 rounded-lg font-inter text-[14px] w-full transition-[colors, shadow] duration-[300ms] appearance-none autofill:bg-transparent max-w-[400px] placeholder-[#ffffff87]",
  {
    variants: {
      variant: {
        outline:
          "bg-transparent border-1 border-[#262537]  focus:placeholder-[#39374f] outline-[#ffffff17] focus:border-[#9291b7] focus:outline-none focus:shadow-[0px_0px_0px_3px_#ffffff20]",
        ghost: "bg-transparent outline-none",
        filled: "bg-[#8698DA]/15",
        error:
          "!border-red-500 border-1 bg-transparent outline-none shadow-[0px_0px_0px_3px_#FF000050]",
      },
      size: {
        sm: "",
        md: "",
        lg: "",
        full: "max-w-none",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "md",
    },
  },
);

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, // Exclude native size attribute
    VariantProps<typeof TextAreaVariants> {
  label?: string; //Only populate when label wanted
  name: string; // Critical: Formik needs name attr to link Textarea to form state managed by formik.
  ref?: Ref<HTMLTextAreaElement>;
}

function TextArea({ className, size, variant, label, ref, ...props }: TextAreaProps) {
  const [field, meta] = useField(props);
  const isError = meta.touched && meta.error; // Condition for error

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={field.name}
          className="mb-1 block text-left font-figtree text-[14px] font-medium"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={field.name}
        {...field}
        {...props}
        className={twMerge(
          TextAreaVariants({ variant: isError ? "error" : variant, size }),
          className,
        )}
      />
      {isError && (
        <div className="mt-1 text-left text-[12px] text-red-500">
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default TextArea;

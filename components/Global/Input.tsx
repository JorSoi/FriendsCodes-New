import { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputVariants = cva(
  "p-3 rounded-lg font-inter text-[14px] w-full max-w-[400px] transition-[colors, shadow] duration-[300ms] appearance-none autofill:bg-transparent",
  {
    variants: {
      variant: {
        outline:
          "bg-transparent border-1 border-[#262537] placeholder-[#73727E] focus:placeholder-[#39374f] outline-[#ffffff17] focus:border-[#9291b7] focus:outline-none focus:shadow-[0px_0px_0px_3px_#ffffff20]",
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
  label?: string;
}

function Input({ className, size, variant, label, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={props.type}
        className="mb-1 block font-figtree text-[14px] font-medium"
      >
        {label}
      </label>
      <input
        id={props.type}
        {...props}
        className={twMerge(inputVariants({ variant, size }), className)}
      />
    </div>
  );
}

export default Input;

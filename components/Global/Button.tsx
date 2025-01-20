"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/variants";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "hover:[filter:brightness(115%)] hover:scale-[99%] transition-[filter,transform] duration-200 active:scale-[97%]",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]",
        secondary:
          "text-white bg-[#ffffff15] hover:bg-[#ffffff20] shadow-[0_0_0_1px_#ffffff24,inset_0_2px_2px_0_#ffffff10] ",
      },
      size: {
        sm: "text-[14px] md:text-[12px] px-[16px] py-[12px] rounded-[11px] font-medium",
        md: "text-[14px] px-[23px] py-[12px] rounded-[11px] font-medium",
        lg: "text-[17px] md:text-[14px] px-[23px] py-[12px] rounded-[11px] font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

function Button({ children, className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
}

export default Button;

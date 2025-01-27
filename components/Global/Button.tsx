"use client";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/variants";
import { ButtonHTMLAttributes } from "react";
import Image from "next/image";

const buttonVariants = cva(
  "enabled:hover:[filter:brightness(115%)] enabled:hover:scale-[99%] transition-[filter,transform] duration-200 enabled:active:scale-[97%] disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]",
        secondary:
          "text-white bg-[#ffffff15] hover:bg-[#ffffff20] shadow-[0_0_0_1px_#ffffff24,inset_0_2px_2px_0_#ffffff10]",
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
  loading?: boolean;
}

function Button({
  children,
  className,
  size,
  variant,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={loading}
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {loading ? (
        <Image src={'/icons/spinner.svg'} width={20} height={20} alt="" className="mx-auto my-0"/>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;

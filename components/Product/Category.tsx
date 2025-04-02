import { cn } from "@/utils/variants";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface categoryProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof categoryVariant> {
  categoryName: string;
  isActive: boolean;
}

const categoryVariant = cva(
  "group/category flex shrink-0 items-center gap-2 rounded-3xl px-3 py-2 text-[13px] font-medium transition-all relative",
  {
    variants: {
      variant: {
        active:
          "text-white bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]",
        inactive:
          "text-white bg-[#ffffff15] hover:bg-[#ffffff30] shadow-[0_0_0_1px_#ffffff24,inset_0_2px_2px_0_#ffffff05]",
      },
    },
    defaultVariants: {
      variant: "inactive",
    },
  },
);

function Category({
  categoryName,
  variant,
  isActive,
  ...buttonProps
}: categoryProps) {
  return (
    <button
      type="button"
      className={cn(categoryVariant({ variant }), buttonProps.className)}
      {...buttonProps}
    >
      <div
        className={cn(
          "absolute left-3 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffffffc6] opacity-0 hover:bg-[#ffffffee] transition-all",
          isActive && "group-hover/category:opacity-100",
        )}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-45"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 0C7.94772 0 7.5 0.447715 7.5 1V7.5H1C0.447715 7.5 0 7.94771 0 8.5C0 9.05228 0.447715 9.5 1 9.5H7.5V16C7.5 16.5523 7.94772 17 8.5 17C9.05229 17 9.5 16.5523 9.5 16V9.5H16C16.5523 9.5 17 9.05229 17 8.5C17 7.94772 16.5523 7.5 16 7.5H9.5V1C9.5 0.447715 9.05229 0 8.5 0Z"
            fill="#FF00B2"
          />
        </svg>
      </div>
      <Image
        src={`/icons/search-categories/${categoryName}.svg`}
        width={18}
        height={18}
        alt={`category ${categoryName}`}
        className={cn("transition-all", isActive && "group-hover/category:opacity-0")}
      />
      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
    </button>
  );
}

export default Category;

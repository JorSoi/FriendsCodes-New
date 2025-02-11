import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/utils/variants";

const logoVariants = cva(
  "h-full object-contain transition-transform duration-200 group-hover:scale-[105%] shrink-[1] overflow-hidden w-auto",
  {
    variants: {
      size: {
        xs: "max-h-[28px] max-w-[28px] rounded-md",
        sm: "max-h-[35px] rounded-md",
        md: "max-h-[40px] rounded-lg ",
        lg: "max-h-[55px] max-w-[75px] rounded-xl lg:max-h-[50px] sm:max-w-[65px]",
        xl: "max-h-[65px] rounded-xl"
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

function CompanyLogo({
  src,
  size,
  className,
}: {
  src: string | null | undefined;
  size?: VariantProps<typeof logoVariants>["size"];
  className?: string;
}) {
  return (
    <Image
      className={cn(logoVariants({ size }), className)}
      src={src || "/icons/shop.svg"}
      width={100}
      height={100}
      alt="Company Logo"
      draggable={false}
    />
  );
}

export default CompanyLogo;

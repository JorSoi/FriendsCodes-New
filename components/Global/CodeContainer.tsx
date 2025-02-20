import { cn } from "@/utils/variants";
import { cva, VariantProps } from "class-variance-authority";

const containerVariant = cva(
  "relative h-full min-h-[65svh] w-full max-w-[850px] overflow-hidden rounded-2xl border-1 border-[#ffffff10] bg-[#21203d] px-4 pt-4 pb-[100px] 3xl:min-h-[50svh]  xs:rounded-xl xs:px-[3%] xs:pt-[3%] mb-[7svh]",
  {
    variants: {
      variant: {
        block: "",
        center: "flex items-center justify-center pb-[unset]",
      },
    },
    defaultVariants: {
      variant: "block",
    },
  },
);

function CodeContainer({
  children,
  className,
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof containerVariant>["variant"];
}) {
  return (
    <div className={cn(containerVariant({ variant }), className)}>
      {children}
    </div>
  );
}

export default CodeContainer;

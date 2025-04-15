import { cn } from "@/utils/variants";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type SettingsNavItemProps = {
  isActive: boolean;
  sectionName: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

function SettingsNavItem({
  isActive,
  children,
  sectionName,
}: SettingsNavItemProps) {
  return (
    <Link
      href={`/home#${sectionName}`}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-[18px] p-2 text-left transition-colors hover:bg-[#ffffff10] sm:py-1 sm:px-3 font-medium sm:gap-1",
        isActive && "bg-[#ffffff10]",
      )}
    >
      {children}
    </Link>
  );
}

export default SettingsNavItem;

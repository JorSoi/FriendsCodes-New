import clsx from "clsx";
import CompanyLogo from "../../CompanyLogo";
import { HTMLAttributes } from "react";

function CompanySearchItem({
  title = "",
  description = "",
  imageSrc,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, "title" | "description"> & {
  title?: string | null;
  description?: string | null;
  imageSrc?: string | null;
}) {
  return (
    <div
      className="flex cursor-pointer items-center gap-3 rounded-[18px] p-2 text-left transition-colors hover:bg-[#ffffff10]"
      {...props}
    >
      <div
        className={clsx("flex size-10 shrink-0 items-center justify-center", {
          "rounded-xl border-1 border-[#ffffff1b] bg-[#47476a] p-2": !imageSrc,
        })}
      >
        <CompanyLogo src={imageSrc} size={"md"} />
      </div>
      <div className="max-w-[400px] sm:max-w-[300px]">
        <h5 className="-mb-[2px] truncate font-medium max-w-[400px] sm:max-w-[300px]">{title}</h5>
        <p className="truncate text-[14px] text-[#ffffff7c]">{description}</p>
      </div>
    </div>
  );
}

export default CompanySearchItem;

import clsx from "clsx";
import CompanyLogo from "../CompanyLogo";
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
      className="flex cursor-pointer items-center gap-3 rounded-[18px] p-2 text-left hover:bg-[#ffffff10] transition-colors"
      {...props}
    >
      <div className={clsx("flex size-10 items-center justify-center shrink-0", {
        "rounded-xl border-1 border-[#ffffff1b] bg-[#47476a] p-2" : !imageSrc
      })}
      >
        <CompanyLogo src={imageSrc} size={"md"} />
      </div>
      <div className="max-w-[400px]">
        <h5 className="-mb-[2px] truncate font-medium">
          {title}
        </h5>
        <p className="text-[14px] text-[#ffffff7c] truncate">{description}</p>
      </div>
    </div>
  );
}

export default CompanySearchItem;

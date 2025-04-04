import clsx from "clsx";
import CompanyLogo from "../../CompanyLogo";
import { HTMLAttributes } from "react";
import Badge from "../Badge";
import { differenceInDays } from "date-fns";

function CompanySearchItem({
  title = "",
  subtitle = "",
  imageSrc,
  createdAt,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, "title" | "description"> & {
  title?: string | null;
  subtitle?: string | null;
  imageSrc?: string | null;
  createdAt?: string;
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
      <div className="max-w-[400px] sm:max-w-[300px] min-w-0">
        <div className="flex items-center gap-2">
          <h5 className="-mb-[2px] max-w-[400px] truncate font-medium sm:max-w-[300px]">
            {title}
          </h5>
          {createdAt &&
            differenceInDays(new Date(), new Date(createdAt)) <= 4 && (
              <Badge>New</Badge>
            )}
        </div>
        <p className="truncate text-[14px] text-[#ffffff7c]">{subtitle}</p>
      </div>
    </div>
  );
}

export default CompanySearchItem;

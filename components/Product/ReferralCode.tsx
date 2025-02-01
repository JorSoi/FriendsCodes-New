import { UserCodeWithRelations } from "@/types/general.types";
import Image from "next/image";

function ReferralCode({ ...code }: UserCodeWithRelations) {
  return (
    <div className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-[#3e405ba2] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px] xs:min-h-fit">
      <div className="flex size-full flex-col items-center justify-center">
        <Image
          className="h-full max-h-[55px] w-auto rounded-md transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px]"
          src={code.companies.logo_url || ""}
          width={60}
          height={60}
          alt=""
          draggable={false}
        />
        <p className="mt-[10px] w-full truncate font-medium">
          {code.companies.name}
        </p>
      </div>
    </div>
  );
}

export default ReferralCode;

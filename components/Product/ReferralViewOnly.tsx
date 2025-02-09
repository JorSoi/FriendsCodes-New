import { UserCodeWithRelations } from "@/types/general.types";
import Image from "next/image";
import Form from "../Global/FormComponents/Form";
import Input from "../Global/FormComponents/Input";

function ReferralViewOnly({ ...code }: UserCodeWithRelations) {
  return (
    <Form initialValues={{ referralCode: code.referral_value! }} onSubmit={() => {}}>
      <div className="flex w-full flex-col items-center justify-center rounded-xl border-1 border-[#ffffff20] bg-[#30354A] p-3">
        <div className="flex size-full flex-col items-center justify-center">
          <Image
            className="h-full max-h-[55px] w-auto max-w-[85px] rounded-md object-contain transition-transform duration-200 group-hover:scale-[105%] lg:max-h-[50px] sm:max-w-[65px]"
            src={code.companies?.logo_url || "/icons/shop.svg"}
            width={90}
            height={90}
            alt=""
            draggable={false}
          />

          <p className="mt-[10px] w-full truncate font-medium">
            {code.companies.name}
          </p>
          <p>Copy this code and benefit from my referrals</p>
        </div>
        <Input
          type="text"
          name="referralCode"
          className="border-[1.5px] border-dashed border-[#5c6484] pr-9 text-white"
          placeholder="e.g. https://refer.amazon.com/jorsoi13"
          autoComplete="off"
        />
      </div>
    </Form>
  );
}

export default ReferralViewOnly;

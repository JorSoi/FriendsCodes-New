"use client";

import Image from "next/image";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-2 py-6 text-center">
      <div className="flex size-[50px] items-center justify-center rounded-2xl border-1 border-[#ffffff10] bg-[#47476a] p-[10px] text-2xl">
        <Image
          src={"/icons/bell-default.svg"}
          width={18}
          height={18}
          alt=""
          className="opacity-80"
        />
      </div>
      <h1 className="text-md pt-3 font-bold">Nothing here yet.</h1>
      <p className="mt-2 max-w-[300px] text-[15px] text-[#a1a3ae]">
        We will notify you when someone redeems your codes or sends you friend
        requests.
      </p>
    </div>
  );
}

export default EmptyState;

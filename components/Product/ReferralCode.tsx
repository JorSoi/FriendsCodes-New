"use client";

import { UserCodeWithRelations } from "@/types/general.types";
import { cn } from "@/utils/variants";
import Image from "next/image";
import { Suspense, useEffect, useRef, useState } from "react";

function ReferralCode({ ...code }: UserCodeWithRelations) {
  const codeRef = useRef<HTMLDialogElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isModalOpen)
  }, [isModalOpen])

  return (
    <Suspense fallback={<div>loading</div>}>
      <div
        onClick={() => {
          
          codeRef.current?.showModal();
          setIsModalOpen(true);
          
          
        }}
        className="group flex min-h-[130px] w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-[#3e405ba2] p-5 text-center transition-colors hover:bg-[#3e405bd9] lg:p-[10px] md:min-h-[120px] xs:min-h-fit"
      >
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

      <dialog
        onMouseDown={(e) => {
          const dialogDimensions = codeRef.current?.getBoundingClientRect();
          if (!codeRef.current) return;
          if (
            e.clientX < dialogDimensions!.left ||
            e.clientX > dialogDimensions!.right ||
            e.clientY < dialogDimensions!.top ||
            e.clientY > dialogDimensions!.bottom
          ) {
            
            setIsModalOpen(false)
            setTimeout(() => codeRef.current?.close(), 300)
           
          }
        }}
        ref={codeRef}
        className={cn("group transition-all opacity-0 translate-y-10 backdrop:bg-[#09071c00] bg-transparent outline-none duration-300 backdrop:transition-colors backdrop:duration-300 scale-95", {
          "opacity-100 translate-y-[unset] backdrop:bg-[#09071c4f] scale-100": isModalOpen,
        })}
      >
        <p className="size-[400px] bg-red-50">{code.companies.name}</p>
      </dialog>
    </Suspense>
  );
}

export default ReferralCode;

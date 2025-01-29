"use client";

import Image from "next/image";
import { useEffect } from "react";

function Support() {


  useEffect(() => {
    
  
  }, [])

  return (
    <div className="group flex size-[40px] cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[#ffffff16]">
      <div className="relative">
        <Image
          src={"/icons/support.svg"}
          width={24}
          height={24}
          alt="Support"
          className="opacity-[50%] transition-all group-hover:opacity-[70%]"
          draggable={false}
        />
      
      </div>
    </div>
  );
}

export default Support;

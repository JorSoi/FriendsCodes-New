"use client";

import Image from "next/image";
import { useEffect } from "react";

function Profile() {


  useEffect(() => {
    
  
  }, [])

  return (
    <div className="group flex size-[40px] cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-[#ffffff16]">
      <div className="relative">
        <Image
          src={"/icons/user.svg"}
          width={17}
          height={17}
          alt="Notifications"
          className="opacity-[50%] transition-all group-hover:opacity-[70%]"
          draggable={false}
        />
      
      </div>
    </div>
  );
}

export default Profile;

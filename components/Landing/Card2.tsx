import Image from "next/image";
import Button from "../Global/Button";

function Card2() {
  return (
    <div className="fadeInFeatureCards max-w-[400px] overflow-hidden rounded-[13px] border-2 border-[#ffffff10] backdrop-blur-[30px] [background:radial-gradient(208.21%_100.36%_at_68.71%_2.35%,_rgba(255,255,255,0.01)_30.51%,rgba(255,255,255,0.03)_100%)] lg:max-w-full">
      {/* Graphic Container */}
      <div className="relative flex h-[280px] w-full items-center justify-center sm:h-[230px]">
        {/* Button (including all the fancy images etc. around) */}
        <Button className="relative mt-10 flex items-center justify-center gap-2 !text-[16px] sm:!text-[13px] active:!scale-[80%] select-none touch-none">
          <Image
            src={"/icons/share.svg"}
            width={17}
            height={17}
            alt=""
            draggable="false"
          />
          Share Profile
          <Image
            className="absolute bottom-[-40%] right-[5%]"
            src={"/icons/pointer.svg"}
            width={25}
            height={25}
            alt=""
            draggable="false"
          />
          <Image
            className="absolute bottom-[-10%] right-[-50%] size-[35px] rounded-full border-2 border-[#ffffff70] object-cover opacity-55"
            src={"/users/user-1.jpg"}
            width={400}
            height={400}
            alt=""
            draggable="false"
          />
          <Image
            className="absolute right-[-30%] top-[-140%] size-[48px] rounded-full border-2 border-[#ffffff70] object-cover"
            src={"/users/user-2.jpg"}
            width={400}
            height={400}
            alt=""
            draggable="false"
          />
          <Image
            className="absolute left-[-10%] top-[-180%] size-[40px] touch-none rounded-full border-2 border-[#ffffff70] object-cover"
            src={"/users/user-4.jpg"}
            width={400}
            height={400}
            alt=""
            draggable="false"
          />
          <Image
            className="absolute left-[-50%] top-[-30%] size-[33px] touch-none rounded-full border-2 border-[#ffffff70] object-cover"
            src={"/users/user-3.jpg"}
            width={400}
            height={400}
            alt=""
            draggable="false"
          />
        </Button>

        {/* Circle Decoration */}
        <div className="absolute left-1/2 top-[-20%] z-[-1] flex size-[450px] translate-x-[-50%] items-center justify-center rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff09] to-[#ffffff00] to-[80%] sm:top-[-40%]">
          <div className="flex size-[70%] items-center justify-center rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff09] to-[#ffffff00] to-[75%]">
            <div className="size-[60%] rounded-full border-[1px] border-[#ffffff09] bg-gradient-to-b from-[#ffffff07] to-[#ffffff00] to-[90%]"></div>
          </div>
        </div>
      </div>

      {/* Text Container */}
      <div className="px-[26px] pb-[26px] text-center lg:text-left">
        <h3 className="mb-3 text-[20px] font-[670] leading-[130%] tracking-[-2%] text-white">
          Share profile with friends
        </h3>
        <p className="object-top text-[16px] font-normal leading-[135%] text-[#ffffff91]">
          Share your FriendsCodes profile with friends, family or even strangers
          to get the most out of your referral benefits.
        </p>
      </div>
    </div>
  );
}

export default Card2;

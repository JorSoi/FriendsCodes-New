import Image from "next/image";

function Card1() {
  return (
    <div className="max-w-[400px] rounded-[13px] border-2 border-[#ffffff10] [background:radial-gradient(208.21%_100.36%_at_68.71%_2.35%,_rgba(255,255,255,0.01)_30.51%,rgba(255,255,255,0.03)_100%)] lg:max-w-full">
      
      {/* Graphic Container */}
      <div className="relative h-[280px] overflow-hidden">
        <div className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 transform items-center justify-center gap-3">
          <div className="relative flex size-[80px] items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff06] to-[#ffffff03] shadow-[inset_0px_0px_5px_1px_rgba(255,255,255,0.07)]">
            <Image
              src={"/company-logos/zalando-logo.svg"}
              width={30}
              height={30}
              alt="Zalando logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/card-1-custom-border.svg"}
              width={100}
              height={100}
              alt=""
              draggable="false"
            />
          </div>

          <div className="relative flex size-[80px] items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff06] to-[#ffffff03] shadow-[inset_0px_0px_5px_1px_rgba(255,255,255,0.07)]">
            <Image
              src={"/company-logos/airbnb-logo.svg"}
              width={30}
              height={30}
              alt="AirBnB logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/card-1-custom-border.svg"}
              width={100}
              height={100}
              alt=""
              draggable="false"
            />
          </div>

          <div className="group relative flex size-[110px] items-center justify-center rounded-[15px] border-[3px] border-dashed border-[#ffffff40]">
            <div className="rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] p-3 shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]">
              <Image
                src={"/icons/add.svg"}
                width={15}
                height={15}
                alt=""
                draggable="false"
              />
            </div>

            <div className="absolute bottom-[-50%] right-[-45%] z-[1] flex size-[90px] rotate-[-11deg] items-center justify-center rounded-[16px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff20] to-[#ffffff10] shadow-[inset_0px_0px_3px_2px_#2C88D8,_0px_7px_56px_0px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-transform duration-700 group-hover:translate-x-[-50px] group-hover:translate-y-[-40px] group-hover:rotate-[-3deg] group-hover:scale-[110%]">
              <Image
                src={"/company-logos/amazon-logo.svg"}
                width={35}
                height={35}
                alt="RobinHood logo"
                draggable="false"
              />
              <Image
                className="absolute bottom-[-15%] right-[7%]"
                src={"/icons/cursor-closed.svg"}
                width={27}
                height={27}
                alt=""
                draggable="false"
              />
            </div>
          </div>

          <div className="relative flex size-[80px] items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff06] to-[#ffffff03] shadow-[inset_0px_0px_5px_1px_rgba(255,255,255,0.07)]">
            <Image
              src={"/company-logos/robin-hood-logo.svg"}
              width={25}
              height={25}
              alt="RobinHood logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/card-1-custom-border.svg"}
              width={100}
              height={100}
              alt=""
              draggable="false"
            />
          </div>

          <div className="relative flex size-[80px] items-center justify-center rounded-[11px] border-[1px] border-[#ffffff09] bg-gradient-to-br from-[#ffffff06] to-[#ffffff03] shadow-[inset_0px_0px_5px_1px_rgba(255,255,255,0.07)]">
            <Image
              src={"/company-logos/cash-app-logo.svg"}
              width={35}
              height={35}
              alt="RobinHood logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/card-1-custom-border.svg"}
              width={100}
              height={100}
              alt=""
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Text Container */}
      <div className="px-[26px] pb-[26px] text-center lg:text-left">
        <h3 className="mb-3 text-[20px] font-[670] leading-[130%] tracking-[-2%] text-white">
          Add any referral code
        </h3>
        <p className="text-[16px] font-normal leading-[135%] text-[#ffffff91]">
          Most apps you use have referral programs. Add them to your own
          dashboard to keep it all in one place.
        </p>
      </div>
    </div>
  );
}

export default Card1;

import Image from "next/image";

function Card3() {
  return (
    <div className="relative max-w-[400px] rounded-[13px] border-2 border-[#ffffff10] pb-[26px] [background:radial-gradient(208.21%_100.36%_at_68.71%_2.35%,_rgba(255,255,255,0.01)_30.51%,rgba(255,255,255,0.03)_100%)] lg:col-span-2 lg:flex lg:h-[300px] lg:max-w-full lg:flex-row-reverse lg:items-center md:gap-3 sm:block sm:h-full">
      {/* Notification Cards */}
      <div className="relative flex h-full max-h-[280px] w-full items-center justify-center">
        {/* Main Card */}
        <div className="relative mx-[3%] w-full max-w-[330px]">
          <div className="relative z-[3] flex gap-[5%] rounded-[14px] border-[1px] border-[#ffffff14] bg-gradient-to-br from-[#ffffff30] to-[#ffffff12] p-2 backdrop-blur-[10px]">
            <div className="relative h-min shrink-0">
              <Image
                src={"/company-logos/cash-app-logo.svg"}
                width={36}
                height={36}
                alt="CashApp logo"
                draggable="false"
              />
              <div className="absolute bottom-[-9%] right-[-9%] size-3 rounded-full bg-gradient-to-b from-[#FF00B2] to-[#D900FF] shadow-[0_0_0_1px_#ED01D8,inset_0_2px_2px_0_#ffffff70]"></div>
            </div>
            <div>
              <p className="text-[13px] text-[#9e96a4]">
                <span className="font-semibold text-[#f9f5fc]">
                  @jorsoi_13{" "}
                </span>
                has just redeemed your referral code from{" "}
                <span className="font-semibold text-[#f9f5fc]">CashApp</span> 💸
                🎉{" "}
              </p>
              <p className="mt-1 text-[11px] text-[#9e96a4]">2 min ago </p>
            </div>
          </div>
          <div className="absolute inset-x-[8%] bottom-[-10px] z-[2] h-[90%] rounded-[10px] border-[1px] border-[#ffffff10] bg-gradient-to-br from-[#ffffff05] to-[#ffffff08] p-5 opacity-[90%] backdrop-blur-[130px]"></div>
          <div className="absolute inset-x-[14%] bottom-[-18px] z-[1] rounded-[10px] border-[1px] border-[#ffffff04] bg-gradient-to-br from-[#ffffff11] to-[#ffffff08] p-5 opacity-[70%] backdrop-blur-[60px]"></div>

          <div className="absolute left-[-8%] top-[-125%] z-10 flex size-[60px] rotate-[-17deg] scale-[100%] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px]">
            <Image
              src={"/company-logos/netflix-logo.svg"}
              width={20}
              height={20}
              alt="Netflix logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable="false"
            />
          </div>

          <div className="absolute bottom-[-120%] left-[-17%] z-10 flex size-[70px] rotate-[-24deg] scale-[76%] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px]">
            <Image
              src={"/company-logos/uber-logo.svg"}
              width={50}
              height={50}
              alt="Uber logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable="false"
            />
          </div>

          <div className="absolute right-[0%] top-[-158%] z-10 flex size-[70px] rotate-[11deg] scale-[90%] items-center justify-center rounded-[18px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px]">
            <Image
              src={"/company-logos/spotify-logo.svg"}
              width={50}
              height={50}
              alt="Spotify logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable="false"
            />
          </div>

          <div className="absolute bottom-[-70%] right-[-16%] z-10 flex size-[50px] rotate-[11deg] scale-[100%] items-center justify-center rounded-[12px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] mlg:bottom-[-100%] mlg:right-[-6%]">
            <Image
              src={"/company-logos/flink-logo.svg"}
              width={40}
              height={40}
              alt="Flink logo"
              draggable="false"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* Shining Background */}
      <div className="absolute top-0 h-full w-full overflow-hidden rounded-[11px] lg:w-full">
        <div className="absolute left-1/2 top-0 h-full w-[200%] translate-x-[-50%] opacity-20 lg:left-[unset] lg:right-[-24%] lg:h-[150%] lg:w-[100%] lg:translate-x-0 sm:left-1/2 sm:w-[200%] sm:right-[unset] sm:h-full sm:translate-x-[-50%]">
          <div className="from-2% absolute inset-0 z-[3] bg-gradient-to-b from-[#ffffff30] to-[#ffffff00] to-75% [clip-path:polygon(35%_0,65%_0,50%_100%)]"></div>
          <div className="from-2% absolute inset-0 z-[2] bg-gradient-to-b from-[#ffffff30] to-[#ffffff00] to-75% [clip-path:polygon(20%_0,80%_0,50%_100%)]"></div>
          <div className="from-2% absolute inset-0 z-[1] bg-gradient-to-b from-[#ffffff55] via-[#ffffff09] via-70% to-[#ffffff00] to-100% [clip-path:polygon(0_0,100%_0,50%_100%)]"></div>
        </div>
      </div>

      <div className="relative z-[4] shrink-0 px-[26px] text-center lg:max-w-[400px] lg:pr-0 lg:text-left md:max-w-[290px] sm:px-[26px] sm:max-w-[unset]">
        <h3 className="mb-3 text-[19px] font-[670] leading-[130%] tracking-[-2%] text-white">
          Redeem and get the benefits
        </h3>
        <p className="object-top text-[16px] font-normal leading-[135%] text-[#ffffff91]">
          Use other referral links to collect benefits when signing up. This
          usually comes with benefits for both of you.
        </p>
      </div>
    </div>
  );
}

export default Card3;

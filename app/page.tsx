import Button from "@/Components/Global/Button";
import HeadingTag from "@/Components/Landing/HeadingTag";
import NavBar from "@/Components/Landing/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <svg
        viewBox="0 0 1379 893"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[96%] max-w-[1500px] mt-[5px] absolute left-1/2 -translate-x-1/2 z-[-10] top-[10px]"
      >
        <defs>
          <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gradientMask">
            <rect width="100%" height="100%" fill="url(#fadeGradient)" />
          </mask>
          <pattern
            id="imagePattern"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              href="/bg-color-gradients.png"
              x="0"
              y="0"
              width="1379"
              height="893"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>
        <path
          d="M0.68533 91.7291C-1.32564 41.6754 38.709 0 88.8031 0H1290.72C1341 0 1381.1 41.9616 1378.82 92.1832L1342.51 893H32.8774L0.68533 91.7291Z"
          fill="url(#imagePattern)"
          mask="url(#gradientMask)"
        />
      </svg>

      {/* Hero Heading Section */}
      <div className="w-full pt-[190px] md:pt-[170px] xs:pt-[145px] xl:pt-[240px] overflow-hidden">
        <div className="w-[900px] md:w-[500px] max-w-[90%] mx-auto my-auto flex items-center justify-center flex-col text-center relative">
          <h1 className="text-white text-[65px] md:text-[56px] sm:text-[50px] xs:text-[40px] xl:text-[75px] font-[670] tracking-[-2%] leading-[130%] ">
            Share Codes with Friends, Family and the World
          </h1>
          <p className="max-w-[600px] md:max-w-[540px] sm:max-w-[500px] text-[18px] sm:text-[17px] xl:text-[20px] leading-[156.1%] pt-[31px] md:pt-[20px] text-[#A9A6B2]">
            The easiest place to share and redeem product referral codes with
            anyone. Collect the benefits from 4000+ companies worldwide.
          </p>
          <div className="flex gap-6 mt-[52px] xs:mt-[42px]">
            <Button variant={"primary"} size={"md"}>
              Get Started!
            </Button>
            <Button variant={"secondary"} size={"md"}>
              How it works
            </Button>
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] lg:top-[-14%] top-[-8%] xl:top-[-23%] lg:left-[-5%] left-[-10%] xl:left-[-18%] rotate-[-17deg] backdrop-blur-[10px] z-10 scale-[85%] lg:scale-[75%]">
            <Image
              src={"/company-logos/adidas-logo.svg"}
              width={60}
              height={60}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] lg:left-[0%] left-[-1%] xl:left-[-6%] lg:top-[27%] xl:top-[50%] rotate-[-9deg] backdrop-blur-[10px] z-10 scale-[67%]">
            <Image
              src={"/company-logos/amex-logo.svg"}
              width={65}
              height={65}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] lg:left-[-5%] left-[-12%] xl:left-[-24%] bottom-[0%] rotate-[-20deg] backdrop-blur-[10px] z-10 scale-[84%]">
            <Image
              src={"/company-logos/amazon-logo.svg"}
              width={50}
              height={50}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] top-[-8%] xl:top-[-14%] right-[-10%] xl:right-[-17%] rotate-[13deg] backdrop-blur-[10px] z-10 scale-[90%] xl:scale-[95%]">
            <Image
              src={"/company-logos/spotify-logo.svg"}
              width={60}
              height={60}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] right-[-1%] xl:right-[-5%] rotate-[11deg] backdrop-blur-[10px] z-10 scale-[65%] xl:scale-[70%]">
            <Image
              src={"/company-logos/trade-republic-logo.svg"}
              width={65}
              height={65}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="size-[100px] absolute flex justify-center items-center bg-gradient-to-br from-[#2c304678] to-[#40456462] rounded-[25px] right-[-12%] xl:right-[-20%] bottom-[5%] rotate-[11deg] backdrop-blur-[10px] z-10 scale-[69%] xl:scale-[73%]">
            <Image
              src={"/company-logos/paypal-logo.svg"}
              width={45}
              height={45}
              alt="Spotify logo"
            />
            <Image
              className="inset-0 absolute"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="w-full flex justify-center items-center pt-[100px] lg:pt-[70px] pb-[20px] xs:pb-[10px] relative">
        <div className="backdrop-blur-[38px] bg-gradient-to-br from-[#ffffff23] to-[#ffffff04] border-[#ffffff30] border-2 rounded-[20px] xs:rounded-[10px] p-[23px] md:p-[15px] xs:p-[7px] relative max-w-[90%] xs:max-w-[94%]">
          <Image
            className="rounded-[10px] xs:rounded-[5px] relative z-1"
            src={"/hero-image.png"}
            width={950}
            height={550}
            priority
            alt="Dashboard with referral codes"
          />
          <div className="absolute left-[3%] right-[3%] top-[3%] bottom-[30%] md:bottom-[40%] bg-white z-[-1] blur-[80px] md:blur-[40px] sm:blur-[40px] xs:blur-[25px] opacity-[34%]"></div>
        </div>
        <div className="absolute w-full left-0 right-0 bottom-0 h-[30%] z-2 bg-gradient-to-b from-transparent from-0% via-[#09071c9e] via-30% to-[#09071C] to-90%"></div>
      </section>

      <section className="pt-[30px]">
        <div className="flex justify-center">
          <HeadingTag>How it works</HeadingTag>
        </div>
      </section>

      <div id="how-it-works" className="w-full h-20 mt-[100vh] bg-red-400">
        How it works
      </div>
      <div id="about" className="w-full h-20 mt-[100vh] bg-red-400">
        about
      </div>
      <div id="blog" className="w-full h-20 mt-[100vh] bg-red-400">
        blog
      </div>
    </>
  );
}

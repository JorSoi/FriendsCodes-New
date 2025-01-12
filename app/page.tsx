import Button from "@/components/Global/Button";
import ExplanationCardTwo from "@/components/Landing/ExplanationCardTwo";
import ExplanationCardOne from "@/components/Landing/ExplanationCardOne";
import HeadingTag from "@/components/Landing/HeadingTag";
import NavBar from "@/components/Landing/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <svg
        viewBox="0 0 1379 893"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 top-[10px] z-[-10] mt-[5px] w-[96%] max-w-[1500px] -translate-x-1/2"
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
      <div
        id="hero"
        className="w-full overflow-hidden pt-[190px] xl:pt-[240px] md:pt-[170px] xs:pt-[145px]"
      >
        <div className="relative mx-auto my-auto flex w-[900px] max-w-[90%] flex-col items-center justify-center text-center md:w-[500px]">
          <h1 className="mlg:max-w-[600px] text-[65px] font-[670] leading-[130%] tracking-[-2%] text-white xl:text-[75px] md:text-[57px] sm:text-[52px] xs:text-[45px]">
            Share Codes with Friends, Family and the World
          </h1>
          <p className="max-w-[600px] pt-[31px] text-[18px] leading-[156.1%] text-[#A9A6B2] xl:text-[20px] md:max-w-[540px] md:pt-[20px] sm:max-w-[500px] sm:text-[17px]">
            The easiest place to share and redeem product referral codes with
            anyone. Collect the benefits from 4000+ companies worldwide.
          </p>
          <div className="mt-[52px] flex gap-6 xs:mt-[42px]">
            <Button variant={"primary"} size={"md"}>
              Get Started!
            </Button>
            <Button variant={"secondary"} size={"md"}>
              How it works
            </Button>
          </div>

          <div className="mlg:left-[-1%] mlg:top-[-15%] absolute left-[-10%] top-[-15%] z-10 flex size-[100px] rotate-[-17deg] scale-[85%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-18%] xl:top-[-23%] lg:left-[-5%] lg:top-[-19%] lg:scale-[75%] md:left-[-18%] md:scale-[65%] sm:hidden">
            <Image
              src={"/company-logos/adidas-logo.svg"}
              width={60}
              height={60}
              alt="Adidas logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="mlg:scale-[60%] mlg:top-[35%] mlg:rotate-[-25deg] absolute left-[-1%] z-10 flex size-[100px] rotate-[-9deg] scale-[67%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-6%] xl:top-[50%] lg:left-[0%] lg:top-[27%] md:left-[-15%] md:top-[30%] md:rotate-[-19deg] md:scale-[55%] sm:hidden">
            <Image
              src={"/company-logos/amex-logo.svg"}
              width={65}
              height={65}
              alt="Amex logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="mlg:hidden absolute bottom-[0%] left-[-12%] z-10 flex size-[100px] rotate-[-20deg] scale-[78%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-24%] lg:left-[-5%] lg:scale-[60%]">
            <Image
              src={"/company-logos/amazon-logo.svg"}
              width={50}
              height={50}
              alt="Amazon logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="absolute right-[-10%] top-[-8%] z-10 flex size-[100px] rotate-[13deg] scale-[90%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-17%] xl:top-[-14%] xl:scale-[95%] lg:right-[-5.5%] lg:top-[-16%] lg:scale-[80%] md:right-[-17%] md:rotate-[23deg] md:scale-[65%] sm:hidden">
            <Image
              src={"/company-logos/spotify-logo.svg"}
              width={60}
              height={60}
              alt="Spotify logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="mlg:scale-[55%] mlg:rotate-[16deg] absolute right-[-1%] z-10 flex size-[100px] rotate-[11deg] scale-[65%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-5%] xl:scale-[70%] md:right-[-10%] md:top-[33%] md:scale-[50%] sm:hidden">
            <Image
              src={"/company-logos/trade-republic-logo.svg"}
              width={65}
              height={65}
              alt="Trade Republic logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>

          <div className="mlg:hidden absolute bottom-[5%] right-[-12%] z-10 flex size-[100px] rotate-[11deg] scale-[69%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-20%] xl:scale-[73%] lg:bottom-[0%] lg:right-[5%] lg:rotate-[5deg] lg:scale-[50%]">
            <Image
              src={"/company-logos/paypal-logo.svg"}
              width={45}
              height={45}
              alt="Spotify logo"
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative flex w-full items-center justify-center pb-[20px] pt-[100px] lg:pt-[70px] xs:pb-[10px]">
        <div className="relative max-w-[90%] rounded-[20px] border-2 border-[#ffffff30] bg-gradient-to-br from-[#ffffff23] to-[#ffffff04] p-[23px] backdrop-blur-[38px] md:p-[15px] xs:max-w-[94%] xs:rounded-[10px] xs:p-[7px]">
          <Image
            className="z-1 relative rounded-[10px] xs:rounded-[5px]"
            src={"/hero-image.png"}
            width={950}
            height={550}
            priority
            alt="Dashboard with referral codes"
          />
          <div className="absolute bottom-[30%] left-[3%] right-[3%] top-[3%] z-[-1] bg-white opacity-[34%] blur-[80px] md:bottom-[40%] md:blur-[40px] sm:blur-[40px] xs:blur-[25px]"></div>
        </div>
        <div className="z-2 absolute bottom-0 left-0 right-0 h-[30%] w-full bg-gradient-to-b from-transparent from-0% via-[#09071c9e] via-30% to-[#09071C] to-90%"></div>
      </section>

      {/* Feature Cards */}
      <section id="how-it-works" className="mx-[3%] scroll-mt-40 pt-[30px]">
        <div className="align-center flex flex-col justify-center gap-[20px]">
          <HeadingTag>How it works</HeadingTag>
          <h2 className="text-center text-[40px] font-[670] leading-[130%] tracking-[-2%] text-white">
            It really can't get any simpler than this!
          </h2>
        </div>

        <div className="align-center flex w-full justify-center">
          <div className="relative mt-[60px] flex w-full max-w-[1300px] justify-between gap-8">
            <ExplanationCardOne />
            <ExplanationCardTwo />

            {/* <div className="absolute left-[-10%] top-[50%] z-[-1] h-[30%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#7c07dc93] blur-[125px]"></div>
            <div className="absolute right-[-10%] top-[50%] z-[-1] h-[30%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#9413a29d] blur-[125px]"></div> */}
          </div>
        </div>
      </section>

      <div id="about" className="mt-[100vh] h-20 w-full bg-red-400">
        about
      </div>
      <div id="blog" className="mt-[100vh] h-20 w-full bg-red-400">
        blog
      </div>
    </>
  );
}

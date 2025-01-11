import Button from "@/Components/Global/Button";
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
      <div className="w-[900px] max-w-[90%] text-center mx-auto my-auto pt-[190px] xl:pt-[240px] flex items-center justify-center flex-col">
        <h1 className="text-white text-[65px] md:text-[52px] sm:text-[47px] xl:text-[75px] font-[670] tracking-[-2%] leading-[130%] ">Share Codes with Friends, Family and the World</h1>
        <p className="max-w-[600px] md:max-w-[540px] sm:max-w-[500px] text-[18px] xl:text-[20px] leading-[156.1%] pt-[31px] text-[#A9A6B2]">The easiest place to share and redeem product referral codes with anyone. Collect the benefits from 4000+ companies worldwide.</p>
        <div className="flex gap-6 mt-[52px]">
          <Button variant={'primary'} size={'md'}>Get Started!</Button>
          <Button variant={'secondary'} size={'md'}>How it works</Button>
        </div>
      </div>


      {/* Hero Image */}
      <section className="w-full flex justify-center items-center pt-[100px] lg:pt-[70px] pb-[20px] relative">
        <div className="backdrop-blur-[38px] bg-gradient-to-br from-[#ffffff23] to-[#ffffff04] border-[#ffffff30] border-2 rounded-[20px] p-[23px] md:p-[15px] relative max-w-[90%]">
          <Image className="[border-radius:10px] shadow-[0_0_17_0px_#16182440 relative z-1" src={'/hero-image.png'} width={950} height={550} priority alt="Dashboard with referral codes"/>
          <div className="absolute left-[3%] right-[3%] top-[3%] bottom-[30%] bg-white z-[-1] blur-[80px] opacity-[34%]"></div>
        </div>
        <div className="absolute w-full left-0 right-0 bottom-0 h-[200px] z-2 bg-gradient-to-b from-transparent from-0% via-[#09071c9e] via-30% to-[#09071C] to-90%"></div>
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

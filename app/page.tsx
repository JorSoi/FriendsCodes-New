import Button from "@/components/Global/Button";
import Card2 from "@/components/Landing/Card2";
import Card1 from "@/components/Landing/Card1";
import SectionHeading from "@/components/Landing/SectionHeading";
import NavBar from "@/components/Landing/NavBar";
import Image from "next/image";
import Card3 from "@/components/Landing/Card3";
import Link from "next/link";
import Question from "@/components/Landing/Question";

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
          <h1 className="text-[65px] font-[670] leading-[130%] tracking-[-2%] text-white xl:text-[75px] mlg:max-w-[600px] md:text-[57px] sm:text-[52px] xs:text-[45px]">
            Share Codes with Friends, Family and the World
          </h1>
          <p className="max-w-[600px] pt-[31px] text-[18px] leading-[156.1%] text-[#A9A6B2] xl:text-[20px] md:max-w-[540px] md:pt-[20px] sm:max-w-[500px] sm:text-[17px]">
            The easiest place to share and redeem product referral codes with
            anyone. Collect the benefits from 4000+ companies worldwide.
          </p>
          <div className="mt-[52px] flex gap-6 xs:mt-[42px]">
            <Link href={"https://friendscodes.de/auth/signUp"}>
              <Button variant={"primary"} size={"md"}>
                Get Started!
              </Button>
            </Link>
            <Link href={"/#how-it-works"}>
              <Button variant={"secondary"} size={"md"}>
                How it works
              </Button>
            </Link>
          </div>

          <div className="absolute left-[-10%] top-[-15%] z-10 flex size-[100px] rotate-[-17deg] scale-[85%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-18%] xl:top-[-23%] lg:left-[-5%] lg:top-[-19%] lg:scale-[75%] mlg:left-[-1%] mlg:top-[-15%] md:left-[-18%] md:scale-[65%] sm:hidden">
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

          <div className="absolute left-[-1%] z-10 flex size-[100px] rotate-[-9deg] scale-[67%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-6%] xl:top-[50%] lg:left-[0%] lg:top-[27%] mlg:top-[35%] mlg:rotate-[-25deg] mlg:scale-[60%] md:left-[-15%] md:top-[30%] md:rotate-[-19deg] md:scale-[55%] sm:hidden">
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

          <div className="absolute bottom-[0%] left-[-12%] z-10 flex size-[100px] rotate-[-20deg] scale-[78%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-24%] lg:left-[-5%] lg:scale-[60%] mlg:hidden">
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

          <div className="absolute right-[-1%] z-10 flex size-[100px] rotate-[11deg] scale-[65%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-5%] xl:scale-[70%] mlg:rotate-[16deg] mlg:scale-[55%] md:right-[-10%] md:top-[33%] md:scale-[50%] sm:hidden">
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

          <div className="absolute bottom-[5%] right-[-12%] z-10 flex size-[100px] rotate-[11deg] scale-[69%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-20%] xl:scale-[73%] lg:bottom-[0%] lg:right-[5%] lg:rotate-[5deg] lg:scale-[50%] mlg:hidden">
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
      <section
        id="how-it-works"
        className="scroll-mt-40 overflow-hidden px-[3%] pt-[30px]"
      >
        <SectionHeading tagContent="How it works">
          It really can&apos;t get any simpler than this!
        </SectionHeading>

        <div className="flex w-full justify-center">
          <div className="relative mt-[60px] grid w-full max-w-[1300px] grid-cols-3 justify-between gap-8 lg:max-w-[850px] lg:grid-cols-2 sm:flex sm:flex-wrap">
            <Card1 />
            <Card2 />
            <Card3 />

            <div className="absolute left-[-10%] top-[50%] z-[-1] h-[50%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#7c07dc87] blur-[125px]"></div>
            <div className="absolute right-[-10%] top-[50%] z-[-1] h-[50%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#9413a284] blur-[125px]"></div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-40 overflow-hidden px-[3%] pt-[100px]"
      >
        <SectionHeading tagContent="FAQ">
          Still not sure how it works?
        </SectionHeading>

        <div className="flex w-full items-center justify-center pt-[50px]">
          <div className="grid w-full max-w-[1100px] grid-cols-2 justify-items-center gap-5 sm:grid-cols-1">
            <Question
              questionTitle={"What is FriendsCodes about?"}
              iconSrc="/icons/star-shining.svg"
              iconWidth={24}
              iconHeight={24}
            >
              FriendsCodes lets you store and share all your referral codes in
              one place. Share your profile to ensure friends use your codes, so
              you never miss out on rewards.
            </Question>
            <Question
              questionTitle={"What are referral codes?"}
              iconSrc="/icons/gift.svg"
            >
              Referral codes are unique links companies provide to track how
              many people you invite. Successful referrals earn you rewards like
              discounts, cash, or coupons.
            </Question>
            <Question
              questionTitle={"How can I maximize my referrals?"}
              iconSrc="/icons/money.svg"
            >
              Share your referral profile globally! Add your profile link to
              social media bios to remind friends to use your codes when signing
              up for services.
            </Question>
            <Question
              questionTitle={"Who can see the codes on my profile?"}
              iconSrc="/icons/multiple-users.svg"
            >
              Your codes are visible to anyone with your profile link and
              friends you have added on the platform.
            </Question>
            <Question
              questionTitle={"How will I know if my codes are used?"}
              iconSrc="/icons/bell-ringing.svg"
            >
              Since redemptions happen outside our platform, you will need to
              track them. However, we will notify you when someone opens or
              copies any of your referral codes.
            </Question>
            <Question
              questionTitle={"Is it free?"}
              iconSrc="/icons/diamond.svg"
            >
              Yes! Referral programs are widely offered by companies to grow
              their user base, and we are here to help you get the most value
              from your referral codes - completely free.
            </Question>
          </div>
        </div>
        <div className="flex items-center justify-center py-16">
          <a
            href="mailto:heimleitung@alfred-delp-haus.de"
            className="px-10"
          >
            <Button variant="secondary" size="md">
              Send Questions or Feedback
            </Button>
          </a>
        </div>
      </section>

      <section id="blog " className="flex items-center justify-center pt-20">
        {/* Footer Card */}
        <div className="relative mx-[3%] flex h-[456px] w-full max-w-[1150px] items-center justify-center border-2 border-red-400 px-[3%] sm:h-full sm:py-[10%] sm:mx-[2%]">
          <div className="flex max-w-[800px] flex-col items-center justify-center border-1 border-green-500 text-center ">
            <h2 className="text-[55px] font-[670] leading-[130%] tracking-[-2%] text-white mlg:text-[50px] mlg:max-w-[600px] md:text-[45px] sm:text-[42px] xs:text-[37px]">
              Get your referral codes redeemed faster today!
            </h2>
            <p className="mt-[15px] max-w-[580px] text-[18px] leading-[156.1%] text-[#A9A6B2] md:text-[17px] mlg:px-[2%]">
              Start sharing your referral codes to ensure no one misses out on the rewards. It's free, easy, and the perfect way to maximize your benefits!
            </p>
            <div className="mt-[50px] flex gap-6 xs:mt-[42px] xs:flex-col xs:w-[90%]">
              <Link href={"https://friendscodes.de/auth/signUp"}>
                <Button variant={"primary"} size={"md"} className="xs:w-full">
                  Sign Up!
                </Button>
              </Link>
              <Link href={"/#how-it-works"}>
                <Button variant={"secondary"} size={"md"} className="xs:w-full">
                  Login to Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <svg
            className="absolute inset-0 z-[-1]"
            width="100%"
            height="100%"
            viewBox="0 0 1125 465"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="footerBgPattern"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="100%"
              >
                <image
                  href="/footer-card-bg.png"
                  x="-75%"
                  y="-35%"
                  width="250%"
                  height="150%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              d="M1.11287 47.3748C-2.12862 22.2532 17.4377 0 42.7675 0H1082.33C1107.63 0 1127.18 22.1937 1124 47.2866L1075.66 428.287C1073 449.27 1055.14 465 1033.99 465H91.9288C70.8107 465 52.9767 449.319 50.2742 428.375L1.11287 47.3748Z"
              fill="url(#footerBgPattern)"
            />
          </svg>
        </div>
      </section>

      <div id="blog" className="mt-[100vh] h-20 w-full bg-red-400">
        blog
      </div>
    </>
  );
}

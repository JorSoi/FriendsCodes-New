"use client";

import Button from "@/components/Global/Button";
import Card1 from "@/components/Landing/Card1";
import Card2 from "@/components/Landing/Card2";
import Card3 from "@/components/Landing/Card3";
import SectionHeading from "@/components/Landing/SectionHeading";
import NavBar from "@/components/Landing/NavBar";
import Image from "next/image";
import Link from "next/link";
import Question from "@/components/Landing/Question";
import Footer from "@/components/Landing/Footer";
import useAnimations from "@/lib/useAnimations";
import Tag from "@/components/Landing/Tag";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const visitorName = useSearchParams().get("visitor");

  useAnimations();

  return (
    <main>
      <NavBar className="fadeInHero invisible" />
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
              href="/bg-color-gradients.webp"
              x="0"
              y="0"
              width={"100%"}
              height={"100%"}
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

      {/* MARK: Hero Heading Section */}
      <section
        id="hero"
        className="flex w-full items-center justify-center overflow-x-hidden pb-[100px] pt-[190px] xl:pt-[240px] lg:pb-[70px] md:pt-[170px] sm:pt-[125px]"
      >
        <div className="relative mx-[3%] flex w-full max-w-[990px] flex-col items-center justify-center text-center md:w-[550px]">
          {visitorName && <Tag className="mb-4">Hey, {visitorName} ! 👋</Tag>}
          <h1 className="fadeInHero invisible text-[65px] font-[670] leading-[130%] tracking-[-2%] text-white xl:text-[75px] mlg:max-w-[600px] md:text-[57px] sm:text-[52px] xs:text-[43px]">
            Share Referrals with Friends, Family and the World
          </h1>
          <p className="fadeInHero invisible max-w-[620px] pt-[31px] text-[18px] leading-[156.1%] text-[#A9A6B2] xl:text-[20px] md:max-w-[540px] md:pt-[20px] sm:max-w-[500px] sm:text-[17px] xs:pt-[15px]">
            The easiest place to share and redeem product referrals with anyone.
            Collect benefits from 4000+ companies worldwide.
          </p>
          <div className="fadeInHero invisible mt-[52px] flex gap-6 xs:mt-[42px]">
            <Link
              href={`/auth/registration${visitorName ? "?visitor=" + visitorName : ""}`}
            >
              <Button
                variant={"primary"}
                size={"lg"}
                data-umami-event="lp-hero-get-started"
              >
                Share my Codes!
              </Button>
            </Link>
            <Link
              href={`/${visitorName ? "?visitor=" + visitorName : ""}#how-it-works`}
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                data-umami-event="lp-hero-how-it-works"
              >
                How it works
              </Button>
            </Link>
          </div>

          <div className="popHeroLeft invisible absolute left-[-10%] top-[-15%] z-10 flex size-[100px] rotate-[-17deg] scale-[85%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-13%] xl:top-[-23%] lg:left-[-5%] lg:top-[-19%] lg:scale-[75%] mlg:left-[-1%] mlg:top-[-15%] md:left-[-18%] md:scale-[65%] sm:hidden">
            <Image
              src={"/company-logos/adidas-logo.svg"}
              width={60}
              height={60}
              alt="Adidas logo"
              draggable={false}
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable={false}
            />
          </div>

          <div className="popHeroLeft invisible absolute left-[-1%] z-10 flex size-[100px] rotate-[-9deg] scale-[67%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-1%] xl:top-[50%] lg:left-[0%] lg:top-[27%] mlg:top-[35%] mlg:rotate-[-25deg] mlg:scale-[60%] md:left-[-15%] md:top-[30%] md:rotate-[-19deg] md:scale-[55%] sm:hidden">
            <Image
              src={"/company-logos/amex-logo.svg"}
              width={65}
              height={65}
              alt="Amex logo"
              draggable={false}
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable={false}
            />
          </div>

          <div className="popHeroLeft invisible absolute bottom-[0%] left-[-12%] z-10 flex size-[100px] rotate-[-20deg] scale-[78%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:left-[-17%] lg:left-[-5%] lg:scale-[60%] mlg:hidden">
            <Image
              src={"/company-logos/amazon-logo.svg"}
              width={50}
              height={50}
              alt="Amazon logo"
              draggable={false}
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable={false}
            />
          </div>

          <div className="popHeroRight invisible absolute right-[-10%] top-[-8%] z-10 flex size-[100px] rotate-[13deg] scale-[90%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-15%] xl:top-[-14%] xl:scale-[95%] lg:right-[-5.5%] lg:top-[-16%] lg:scale-[80%] md:right-[-17%] md:rotate-[23deg] md:scale-[65%] sm:hidden">
            <Image
              src={"/company-logos/spotify-logo.svg"}
              width={60}
              height={60}
              alt="Spotify logo"
              draggable={false}
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable={false}
            />
          </div>

          <div className="popHeroRight invisible absolute right-[-1%] z-10 flex size-[100px] rotate-[11deg] scale-[65%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-2%] xl:scale-[70%] mlg:rotate-[16deg] mlg:scale-[55%] md:right-[-10%] md:top-[33%] md:scale-[50%] sm:hidden">
            <Image
              src={"/company-logos/trade-republic-logo.svg"}
              width={65}
              height={65}
              alt="Trade Republic logo"
              draggable={false}
            />
            <Image
              className="absolute inset-0"
              src={"/company-logos/logo-box-border.svg"}
              width={300}
              height={300}
              alt=""
              draggable={false}
            />
          </div>

          <div className="popHeroRight invisible absolute bottom-[5%] right-[-12%] z-10 flex size-[100px] rotate-[11deg] scale-[69%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] xl:right-[-14%] xl:scale-[73%] lg:bottom-[0%] lg:right-[5%] lg:rotate-[5deg] lg:scale-[50%] mlg:hidden">
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
      </section>

      {/* MARK: Hero Image */}
      <section className="relative flex w-full items-center justify-center">
        <div className="fadeInHero invisible relative max-w-[90%] rounded-[20px] border-2 border-[#ffffff30] bg-gradient-to-br from-[#ffffff23] to-[#ffffff04] p-[23px] backdrop-blur-[38px] md:p-[15px] xs:max-w-[94%] xs:rounded-[10px] xs:p-[7px]">
          <Image
            className="z-1 relative rounded-[10px] xs:rounded-[5px]"
            src={"/hero-image.webp"}
            width={950}
            height={550}
            priority
            alt="Dashboard with referral codes"
            draggable={false}
          />
          <div className="absolute bottom-[30%] left-[3%] right-[3%] top-[3%] z-[-1] bg-white opacity-[34%] blur-[80px] md:bottom-[40%] md:blur-[40px] sm:blur-[40px] xs:blur-[25px]"></div>
        </div>
        <div className="z-2 absolute bottom-0 left-0 right-0 h-[30%] w-full bg-gradient-to-b from-transparent from-0% via-[#09071c9e] via-30% to-[#09071C] to-90%"></div>
      </section>

      {/* MARK: Feature Cards */}
      <section id="how-it-works" className="scroll-mt-[80px]">
        <div className="overflow-hidden px-[3%] pb-[160px] pt-[60px] lg:pb-[110px]">
          <SectionHeading tagContent="How it works">
            It really can&apos;t get any simpler than this!
          </SectionHeading>

          <div className="flex w-full justify-center">
            <div className="relative grid w-full max-w-[1300px] grid-cols-3 justify-between gap-8 lg:max-w-[850px] lg:grid-cols-2 sm:flex sm:flex-wrap">
              <Card1 />
              <Card2 />
              <Card3 />

              <div className="absolute left-[-10%] top-[50%] z-[-1] h-[50%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#7c07dc87] blur-[125px]"></div>
              <div className="absolute right-[-10%] top-[50%] z-[-1] h-[50%] w-[60%] translate-y-[-50%] rounded-[100%] bg-[#9413a284] blur-[125px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MARK: FAQs */}
      <section id="faq" className="scroll-mt-40 px-[3%]">
        <SectionHeading tagContent="FAQ">
          Still not sure how it works?
        </SectionHeading>

        <div className="flex w-full items-center justify-center">
          <div className="grid w-full max-w-[1100px] grid-cols-2 justify-items-center gap-5 sm:grid-cols-1">
            <Question
              questionTitle={"What are referral codes?"}
              iconSrc="/icons/gift.svg"
            >
              Referral codes are unique links companies provide to track how
              many people you invite. Successful referrals earn you rewards like
              discounts, cash, or coupons.
            </Question>
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
              questionTitle={"Is it free?"}
              iconSrc="/icons/diamond.svg"
            >
              Yes! Referral programs are widely offered by companies to grow
              their user base, and we are here to help you get the most value
              from your referral codes - completely free.
            </Question>
            <Question
              questionTitle={"Who can see the codes on my profile?"}
              iconSrc="/icons/multiple-users.svg"
            >
              Your codes are visible to anyone with your profile link and
              friends you have added on the platform.
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
              questionTitle={"How will I know if my codes are used?"}
              iconSrc="/icons/bell-ringing.svg"
            >
              Since redemptions happen outside our platform, you will need to
              track them. However, we will notify you when someone opens or
              copies any of your referral codes.
            </Question>
          </div>
        </div>
        <div className="fadeIn flex items-center justify-center py-16">
          <a href="mailto:hello@friendscodes.de" className="px-10">
            <Button variant="secondary" size="md">
              Send Questions or Feedback
            </Button>
          </a>
        </div>
      </section>

      <section
        id="blog "
        className="flex items-center justify-center overflow-hidden pt-20"
      >
        {/* MARK: Footer Card */}
        <div className="wrapper fadeIn relative mx-[3%] flex h-[456px] w-full max-w-[1150px] items-center justify-center px-[3%] sm:mx-[2%] sm:h-full sm:py-[10%]">
          <div className="relative flex max-w-[800px] flex-col items-center justify-center text-center">
            <h2 className="text-[55px] font-[670] leading-[130%] tracking-[-2%] text-white mlg:max-w-[600px] mlg:text-[50px] md:text-[45px] sm:text-[42px] xs:text-[37px]">
              Get your referral codes redeemed faster today!
            </h2>
            <p className="mt-[15px] max-w-[580px] text-[18px] leading-[156.1%] text-[#A9A6B2] mlg:px-[2%] md:text-[17px]">
              Start sharing your referral codes to ensure no one misses out on
              the rewards. It&apos;s free, easy, and the perfect way to maximize
              your benefits!
            </p>
            <div className="mt-[50px] flex gap-6 xs:mt-[42px] xs:w-[90%] xs:flex-col">
              <Link
                href={`/auth/registration${visitorName ? "?visitor=" + visitorName : ""}`}
              >
                <Button
                  variant={"primary"}
                  size={"md"}
                  className="flex items-center justify-center gap-3 xs:w-full"
                  data-umami-event="lp-footer-get-started"
                >
                  Share your codes{visitorName ? ", " + visitorName : null}!
                  <Image
                    src={"/icons/chevron.svg"}
                    width={7}
                    height={7}
                    alt=""
                    draggable={false}
                  />
                </Button>
              </Link>
            </div>

            {/* Company Cards Decoration */}
            <div className="popFooterLeft absolute left-[-5%] top-[-15%] z-10 flex size-[100px] rotate-[-11deg] scale-[75%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] mlg:left-[-12%] mlg:top-[-14%] md:left-[-8%] md:top-[-30%] sm:hidden">
              <Image
                src={"/company-logos/wise.svg"}
                width={65}
                height={65}
                alt="Wise logo"
                draggable={false}
              />
              <Image
                className="absolute inset-0"
                src={"/company-logos/logo-box-border.svg"}
                width={300}
                height={300}
                alt=""
                draggable={false}
              />
            </div>

            <div className="popFooterLeft absolute bottom-[5%] left-[-1%] z-10 flex size-[100px] rotate-[-21deg] scale-[67%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] mlg:bottom-[4%] mlg:left-[-12%] md:bottom-[-5%] md:left-[-6%] md:scale-[60%] sm:hidden">
              <Image
                src={"/company-logos/coinbase.svg"}
                width={65}
                height={65}
                alt="Coinbase logo"
                draggable={false}
              />
              <Image
                className="absolute inset-0"
                src={"/company-logos/logo-box-border.svg"}
                width={300}
                height={300}
                alt=""
                draggable={false}
              />
            </div>

            <div className="popFooterRight absolute right-[-10%] top-[-30%] z-10 flex size-[100px] rotate-[13deg] scale-[78%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] sm:hidden">
              <Image
                src={"/company-logos/doordash.svg"}
                width={60}
                height={60}
                alt="Doordash logo"
                draggable={false}
              />
              <Image
                className="absolute inset-0"
                src={"/company-logos/logo-box-border.svg"}
                width={300}
                height={300}
                alt=""
                draggable={false}
              />
            </div>

            <div className="popFooterRight absolute bottom-[15%] right-[-4%] z-10 flex size-[100px] rotate-[11deg] scale-[60%] items-center justify-center rounded-[25px] bg-gradient-to-br from-[#2c304678] to-[#40456462] backdrop-blur-[10px] mlg:bottom-[15%] mlg:right-[-10%] sm:hidden">
              <Image
                src={"/company-logos/chime.svg"}
                width={78}
                height={78}
                alt="Trade Republic logo"
                draggable={false}
              />
              <Image
                className="absolute inset-0"
                src={"/company-logos/logo-box-border.svg"}
                width={300}
                height={300}
                alt=""
                draggable={false}
              />
            </div>
          </div>
          <svg
            className="absolute inset-0 z-[-1] xs:hidden"
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
                  href="/footer-card-bg.webp"
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
          <div className="absolute inset-0 z-[-1] hidden rounded-[20px] bg-[url('/footer-card-bg.webp')] bg-[length:250%_740%] bg-center brightness-[120%] xs:block"></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

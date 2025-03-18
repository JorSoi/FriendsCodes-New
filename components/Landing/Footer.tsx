import Link from "next/link";

function Footer() {
  return (
    <footer className="relative mt-20 flex items-center justify-center py-10 text-[15px] text-[#969595]">
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-[#fff0] via-[#ffffff27] to-[#ffffff00]"></div>
      <div className="mx-[3%] flex flex-col items-center gap-2">
        <p className="text-center">
          © {new Date().getFullYear()} Friendscodes
          <span className="inline xs:hidden"> · </span>{" "}
          <span className="inline xs:mt-1 xs:block">
            Made with 💜🔥 by <a href="https://linkedin.com/in/jorim-soika/">Jorim Soika</a>
          </span>{" "}
        </p>
        <div className="space-x-1 [&_a]:transition-colors">
          <Link href={"/privacy-policy"} className="hover:text-white">Privacy Policy</Link>
          <span> · </span>{" "}
          <Link href={"/terms"} className="hover:text-white">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

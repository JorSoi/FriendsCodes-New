function Footer() {
  return (
    <footer className="relative mt-20 flex items-center justify-center py-10">
      <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-[#fff0] via-[#ffffff27] to-[#ffffff00]"></div>
      <p className="px-[3%] text-center text-[15px] text-[#969595]">
        © {new Date().getFullYear()} Friendscodes
        <span className="inline sm:hidden"> · </span>{" "}
        {/* Hide the dot on small screens */}
        <span className="inline sm:block sm:mt-1">Made with 💜🔥 in Berlin & Aachen</span>{" "}
        {/* Stack text after dot on small screens */}
      </p>
    </footer>
  );
}

export default Footer;

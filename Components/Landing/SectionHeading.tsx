function SectionHeading({ tagContent, children }: { tagContent?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
     { tagContent && <div className="mx-auto my-auto inline w-auto rounded-full border-[1px] border-[#ffffff10] bg-gradient-to-br from-[#ffffff15] to-[#ffffff09] px-6 py-2 text-[#ffffff65]">
        {tagContent}
      </div>}
      <h2 className="text-center text-[40px] font-[670] leading-[130%] tracking-[-2%] text-white">
        {children}
      </h2>
    </div>
  );
}

export default SectionHeading;

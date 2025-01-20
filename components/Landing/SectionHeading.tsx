import Tag from "./Tag";

function SectionHeading({ tagContent, children }: { tagContent?: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px] mb-[60px] md:mb-[40px]">
     { tagContent && <Tag>{tagContent}</Tag>}
      <h2 className="fadeIn text-center text-[40px] font-[670] leading-[130%] tracking-[-2%] text-white md:text-[33px]">
        {children}
      </h2>
    </div>
  );
}

export default SectionHeading;

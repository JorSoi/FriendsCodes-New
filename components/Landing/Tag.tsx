import { ClassNameValue, twMerge } from "tailwind-merge";

function Tag({children, className} : {children : React.ReactNode, className? : ClassNameValue}) {
    return (
        <div className={twMerge("fadeIn invisible mx-auto my-auto inline w-auto rounded-full border-[1px] border-[#ffffff10] bg-gradient-to-br from-[#ffffff15] to-[#ffffff09] px-6 py-2 text-[#a1a1a1] text-[15px] md:text-[13px] md:px-4 md:py-2", className)}>
        {children}
      </div>
    );
}

export default Tag;
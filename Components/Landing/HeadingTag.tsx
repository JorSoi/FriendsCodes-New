function HeadingTag({children} : {children: React.ReactNode}) {
    return (
        <div className="py-2 px-6 text-[#ffffff65] w-auto rounded-full border-[1px] border-[#ffffff10] bg-gradient-to-br from-[#ffffff15] to-[#ffffff09] inline mx-auto my-auto">
            {children}
        </div>
    );
}

export default HeadingTag;
import Image from "next/image";

function ExplanationCardTwo() {
    return (
        <div className="max-w-[400px] bg-slate-300 px-[26px] pb-[26px] border-2 border-[#ffffff10] rounded-[13px] backdrop-blur-[30px]  [background:radial-gradient(208.21%_100.36%_at_68.71%_2.35%,_rgba(255,255,255,0.01)_30.51%,rgba(255,255,255,0.03)_100%)]">
            <div className="max-h-[280px]">
                <Image className="w-full" src={'/feature-img-2.png'} width={800} height={200} alt="" />
            </div>
            <div className="text-center">
                <h3 className=" text-white text-[20px] font-[670] tracking-[-2%] leading-[130%] mb-3">Share profile with friends</h3>
                <p className="text-[#ffffff91] text-[16px] font-normal leading-[135%] object-top">Share your friendscodes profile with friends, family or even strangers to get the most out of your referral benefits.</p>
            </div>
        </div>
    );
}

export default ExplanationCardTwo;
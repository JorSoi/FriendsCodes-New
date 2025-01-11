import Image from "next/image";

function ExplanationCardOne() {
    return (
        <div className="max-w-[400px] bg-slate-300 p-[26px] border-2 border-[#ffffff10] rounded-[13px] backdrop-blur-[30px]  [background:radial-gradient(208.21%_100.36%_at_68.71%_2.35%,_rgba(255,255,255,0.01)_30.51%,rgba(255,255,255,0.03)_100%)]">
            <div className="py-9">
                <Image src={'/feature-img-1.png'} width={500} height={200} alt="" />
            </div>
            <div className="text-center">
                <h3 className=" text-white text-[20px] font-[670] tracking-[-2%] leading-[130%] mb-3">Add any referral code</h3>
                <p className="text-[#ffffff91] text-[16px] font-normal leading-[135%]">Most apps you use have referral programs. Add them to your own dashboard to keep it all in one place.</p>
            </div>
        </div>
    );
}

export default ExplanationCardOne;
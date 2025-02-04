import Image from "next/image";
import Button from "../Global/Button";

function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-[3%] mb-[10svh] min-h-[70svh] w-full max-w-[850px] overflow-hidden rounded-2xl border-1 border-[#ffffff10] bg-[#21203d] p-4 !pb-[100px] xs:p-[3%]">
      {children}

      <Button className="absolute bottom-[2%] left-1/2 flex justify-center -translate-x-1/2 items-center gap-2 xs:w-[94%] ">
        <Image
          src={"/icons/share.svg"}
          width={17}
          height={17}
          alt=""
          draggable="false"
        />
        Share Profile
      </Button>
    </div>
  );
}

export default CodeContainer;

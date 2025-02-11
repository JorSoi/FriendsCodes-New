// import ShareProfile from "./ShareProfile";
import { twMerge } from "tailwind-merge";

function CodeContainer({ children, className}: { children: React.ReactNode, className?: string }) {
  return (
    <div className={twMerge("relative h-full min-h-[50svh] w-full max-w-[850px] overflow-hidden rounded-2xl border-1 border-[#ffffff10] bg-[#21203d] p-4 !pb-[100px] xs:rounded-xl xs:p-[3%]", className)}>
      {children}

      {/* <ShareProfile /> */}
    </div>
  );
}

export default CodeContainer;

// import ShareProfile from "./ShareProfile";

function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-[10svh] h-full min-h-[50svh] w-full max-w-[850px] overflow-hidden rounded-2xl border-1 border-[#ffffff10] bg-[#21203d] p-4 !pb-[100px] xs:rounded-xl xs:p-[3%]">
      {children}

      {/* <ShareProfile /> */}
    </div>
  );
}

export default CodeContainer;

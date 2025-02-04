function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-[3%] mb-[10svh] min-h-[70svh] w-full max-w-[850px] rounded-2xl border-1 border-[#ffffff10] bg-[#21203d] p-4 xs:p-[3%]">
      {children}
    </div>
  );
}

export default CodeContainer;

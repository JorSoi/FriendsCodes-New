function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-[3%] min-h-[70svh] w-full max-w-[900px] rounded-2xl border-1 border-[#ffffff10] bg-[#D0DAff11] p-4 xs:p-[3%]">
      <div className="grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-3 md:gap-2">{children}</div>
    </div>
  );
}

export default CodeContainer;

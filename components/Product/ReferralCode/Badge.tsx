function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg bg-[#ffffff19] px-2 py-[3px] text-[11px] font-medium text-[#fffffff2] shadow-[0_0_0_1px_#ffffff24,inset_0_2px_2px_0_#ffffff05]">
      {children}
    </span>
  );
}

export default Badge;

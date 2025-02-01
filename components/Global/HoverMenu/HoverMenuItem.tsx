import { twMerge } from "tailwind-merge";

function HoverMenuItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "rounded-md p-2 transition-colors hover:bg-[#ffffff16] cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default HoverMenuItem;

import { twMerge } from "tailwind-merge";

function HoverMenuItem({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "cursor-pointer rounded-xl py-3 px-3 transition-colors hover:bg-[#ffffff16] ",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default HoverMenuItem;

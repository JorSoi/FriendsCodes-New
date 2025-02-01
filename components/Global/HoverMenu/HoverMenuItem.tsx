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
        "cursor-pointer rounded-md p-2 transition-colors hover:bg-[#ffffff16] active:hover:bg-[#ffffff26]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default HoverMenuItem;

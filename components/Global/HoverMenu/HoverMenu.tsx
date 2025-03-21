import { useEffect, useRef } from "react";
import { cn } from "@/utils/variants";

/**
 *
 * Pass it the parent's state and setState<boolean>(!state) to toggle visibility
 */

function HoverMenu({
  children,
  isVisible,
  setIsVisible,
  className,
}: {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  className?: string;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };
  
    if (isVisible) {
      // Add click listener when menu is visible
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      // Cleanup the listener when menu closes or component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible, setIsVisible]);

  return (
    <div
      ref={menuRef}
      className={cn(
        "absolute right-0 top-[99%] mt-1 rounded-2xl border-1 border-[#ffffff16] bg-[#252542] py-3 px-2 shadow-[0px_0px_50px_0px_#00000020] backdrop-blur-[160px] transition-all sm:fixed sm:inset-x-[1%] sm:top-[10%] max-h-[70svh] overflow-y-auto z-[1] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#32324d] [&::-webkit-scrollbar-thumb]:pr-2 [&::-webkit-scrollbar]:w-2",
        {
          "visible translate-y-0 opacity-100": isVisible,
          "invisible translate-y-1 opacity-0": !isVisible,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

export default HoverMenu;

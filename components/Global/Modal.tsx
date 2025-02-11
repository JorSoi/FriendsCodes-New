"use client";

import { cn } from "@/utils/variants";
import { RefObject } from "react";

function Modal({
  children,
  className,
  ref,
  closeModal,
}: {
  children: React.ReactNode;
  className?: string;
  ref: RefObject<HTMLDivElement | null>;
  closeModal: () => void;
}) {

  return (
    <div
      data-open="false"
      ref={ref}
      className={cn(
        "transition-all group fixed inset-0 z-[10000] flex cursor-auto items-center justify-center bg-[#09071cc6] duration-150 backdrop-blur-[4px]",
        "data-[open=true]:visible data-[open=true]:opacity-100",
        "data-[open=transition]:opacity-0",
        "data-[open=false]:invisible data-[open=false]:opacity-0",
      )}
      onClick={() => closeModal()}
    >
      <div
        data-open="false"
        onClick={(e) => e.stopPropagation()} //prevents backdrop from triggering animation even when clicking on its child.
        className={cn(
          "z-[99999] translate-y-5 scale-95 transition-transform duration-150 mx-[3%]",
          "group-data-[open=true]:translate-y-0 group-data-[open=true]:scale-100",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;

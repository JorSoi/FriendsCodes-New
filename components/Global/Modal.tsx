"use client";

import { cn } from "@/utils/variants";
import { RefObject } from "react";
import { createContext } from "react";
export const ModalContext = createContext<(() => void) | null>(null);

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
    <ModalContext.Provider value={closeModal}>
      <div
        data-open="false"
        ref={ref}
        className={cn(
          "group fixed inset-0 z-[10000] flex cursor-auto items-center justify-center overflow-y-auto bg-[#09071cc6] backdrop-blur-[4px] transition-all duration-150 sm:items-start",
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
            "z-[10001] mx-[3%] -mb-[40px] duration-300",
            "group-data-[open=true]:mb-0 sm:my-[15svh]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
}

export default Modal;

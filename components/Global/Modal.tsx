"use client";

import { cn } from "@/utils/variants";
import { createContext } from "react";
export const ModalContext = createContext<(() => void) | null>(null);

function Modal({
  children,
  className,
  closeModal,
  modalState,
}: {
  children: React.ReactNode;
  className?: string;
  closeModal: () => void;
  modalState?: "open" | "closing" | "closed";
}) {
  if (modalState === "closed") return null;
  return (
    <ModalContext.Provider value={closeModal}>
      <div
        className={cn(
          "group fixed inset-0 z-[10000] flex cursor-auto items-center justify-center overflow-y-auto bg-[#09071cc6] backdrop-blur-[4px] transition-all duration-700 sm:items-start",
          {
            "animate-fadeInModal": modalState === "open",
            "animate-fadeOutModal pointer-events-none":
              modalState === "closing",
          },
        )}
        onClick={(e) => {
          e.stopPropagation(); //to ensure that clicks on modal element dont bubble down to parent
          closeModal();
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()} //prevents backdrop from triggering animation even when clicking on its child.
          className={cn(
            {
              "animate-openModal": modalState === "open",
              "animate-closeModal": modalState === "closing",
            },
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

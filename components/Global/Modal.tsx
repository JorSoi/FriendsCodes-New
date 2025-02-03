import { cn } from "@/utils/variants";
import { RefObject } from "react";

function Modal({
  children,
  className,
  ref,
  closeModal,
  isOpen,
}: {
  children: React.ReactNode;
  className?: string;
  ref: RefObject<HTMLDialogElement | null>;
  closeModal: () => void;
  isOpen : boolean;
}) {
  return (

    
    <dialog
    autoFocus={false}
      ref={ref}
      onClick={(e) => {
        if (!ref.current) return;
        const dialog = ref.current;

        const rect = dialog.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          closeModal();
        }
      }}
      className={cn(
        "translate-y-10 scale-95 bg-transparent opacity-0 outline-none transition-all duration-300 backdrop:bg-[#09071c00] backdrop:backdrop-blur-[10px] backdrop:transition-all backdrop:duration-300 overflow-visible", {
            "translate-y-0 scale-100 opacity-100 backdrop:bg-[#09071c82]": isOpen
        },
  
        className,
      )}
    >
      {children}
    </dialog>
  );
}

export default Modal;

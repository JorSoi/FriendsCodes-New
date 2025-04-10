import { useState } from "react";

interface ModalReturnTypes {
  openModal: () => void;
  closeModal: () => Promise<void>;
  modalState: "open" | "closing" | "closed";
}

export const useModal = () : ModalReturnTypes=> {
  const [modalState, setModalState] = useState<"open" | "closing" | "closed">("closed");

  const openModal = () => setModalState("open");

  const closeModal = (): Promise<void> => {
    setModalState("closing");
    return new Promise((resolve) => {
      setTimeout(() => {
        setModalState((prevState) => {
          const nextState = prevState !== "open" ? "closed" : prevState;
          // Resolve only when the modal is fully closed
          if (nextState === "closed") resolve();
          return nextState;
        });
      }, 200); // Match this duration with your animation timing
    });
  };

  return { openModal, closeModal, modalState };
};

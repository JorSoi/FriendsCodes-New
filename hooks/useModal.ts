import { useState } from "react";

export const useModal = () => {
  const [modalState, setModalState] = useState<"open" | "closing" | "closed">("closed")

  const openModal = () => setModalState("open")

  const closeModal = () => {
    setModalState("closing"); //"closing allows us to run exit animations before the component actually unmounts"
    setTimeout(() => {
      setModalState(prevState => prevState !== "open" ? "closed" : prevState); //Only set modal to closed if it is not being opened again during the closing animation.
    }, 300);
  };

  return { openModal, closeModal, modalState };
};

import { useRef, useState } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.dataset.open = "true";
      modalRef.current.classList.add("isOpen");
    }
  };

  const closeModal = () => {
    if (!modalRef.current) return;
    modalRef.current.dataset.open = "transition";
    setTimeout(() => {
      if (!modalRef.current) return;
      modalRef.current.dataset.open = "false";
    }, 100);
  };

  return { modalRef, openModal, closeModal };
};

import { useRef, useState } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setIsOpen(true)
    }
  };

  const closeModal = () => {
    if (!modalRef.current) return;
    setIsOpen(false)
    setTimeout(() => {
      if (!modalRef.current) return;
      modalRef.current.close();
    }, 300);
  };

  return { modalRef, openModal, closeModal, isOpen };
};

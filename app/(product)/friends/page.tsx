"use client";
import Button from "@/components/Global/Button";
import Modal from "@/components/Global/Modal";
import CodeContainer from "@/components/Product/CodeContainer";
import Tab from "@/components/Product/Tab";
import { useModal } from "@/hooks/useModal";

function Page() {
  const { modalRef, closeModal, openModal } = useModal();

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Tab />
      <CodeContainer>
        <Button onClick={openModal}>Click me!</Button>
      </CodeContainer>
      <Modal ref={modalRef} closeModal={closeModal}>
        <div className="">
          <p>Test123</p>
        </div>
      </Modal>
    </div>
  );
}

export default Page;

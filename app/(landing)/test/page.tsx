"use client";

import Form from "@/components/Global/FormComponents/Form";
import Modal from "@/components/Global/Modal";
import CompanySearch from "@/components/Product/ReferralCode/ReferralCreationForm/CompanySearch";
import { useModal } from "@/hooks/useModal";
import { Tables } from "@/types/database.types";
import { useState } from "react";

function Page() {
  const { closeModal, modalRef } = useModal();
  const [company, setCompany] = useState<Tables<"companies"> | null>(null);
  console.log(company)

  return (
    <div>
      Enter
      <Modal closeModal={closeModal} ref={modalRef} open>
        <Form initialValues={{searchValue: ""}} onSubmit={() => {}}>
          <CompanySearch setCompany={setCompany} />
        </Form>
      </Modal>
    </div>
  );
}

export default Page;

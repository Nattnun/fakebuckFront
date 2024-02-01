import React, { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <Button bg="green" color="white" onClick={() => setOpen(true)}>
        Create new Account
      </Button>
      {open && (
        <Modal title="Sing up" onClose={() => setOpen(false)}>
          <RegisterForm onSuccess={() => setOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

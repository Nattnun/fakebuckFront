import React from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";
import Modal from "../components/Modal";

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto my-32 bg-white rounded-lg p-4 shadow-lg">
      <LoginForm />
      <hr className="my-6" />
      <RegisterContainer />
      <Modal />
    </div>
  );
}

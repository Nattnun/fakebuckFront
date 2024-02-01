import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState({ firstName: "john" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 p-4 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div className="col-span-full text-center">
          <Button bg="green" color="white">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  );
}

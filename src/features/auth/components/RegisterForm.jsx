import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import registerSchema from "../validations/validate-register";

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState({});
  const [error, setError] = useState({
    firstName: "pls fill your first name",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { value, error } = registerSchema.validate(input, {
      abortEarly: false,
    });
    console.log(error);
    // onSuccess();
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
          {error.firstName ? (
            <small className="text-red-500">{error.firstName}</small>
          ) : null}
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

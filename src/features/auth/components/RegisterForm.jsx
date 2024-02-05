import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import validateRegister from "../validations/validate-register";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";

const initial = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

// [{context,message,path,type}] ==> {firstName,LastName,...}

export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }

      await register(input);
      toast.success("register successfully");
      onSuccess();
    } catch (err) {
      console.log(err);
      if (err.response?.data.message === "EMAIL_MOBILE_IN_USE") {
        return setError({ emailOrMobile: "already in use" });
      }
      toast.error("internal server error");
    }
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
            errorMessage={error.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChange}
            errorMessage={error.lastName}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Email or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChange}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChange}
            errorMessage={error.password}
          />
        </div>
        <div className="col-span-full">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
            errorMessage={error.confirmPassword}
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

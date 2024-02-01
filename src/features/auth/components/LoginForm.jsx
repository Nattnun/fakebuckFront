import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

export default function LoginForm() {
  return (
    <form>
      <div className="grid gap-4">
        <Input placeholder="Email Address or Moblie" />
        <Input placeholder="Password" />
        <Button bg="blue" color="white">
          Login
        </Button>
      </div>
    </form>
  );
}

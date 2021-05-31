import React from "react";
import FormRegister from "./form-register/FormRegister";
import { useForm } from "../../hooks/use-form/useForm";

function RegisterTemplate () {
  const [inputValues, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  function handleSubmit () {
    reset();
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <FormRegister
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RegisterTemplate;

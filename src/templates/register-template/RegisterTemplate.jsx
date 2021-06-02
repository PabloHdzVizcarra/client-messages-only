import React, { useState } from "react";
import FormRegister from "./form-register/FormRegister";
import { useForm } from "../../hooks/use-form/useForm";
import ErrorAlert from "../../components/alerts/ErrorAlert";
import { validateRegisterForm } from "./form-register/validate-register-form";

function RegisterTemplate () {
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const [inputValues, handleInputChange, reset] = useForm({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  function handleSubmit (event) {
    event.preventDefault();
    const { name, lastname, email, password, repeatPassword } = inputValues;
    const { error, message } = validateRegisterForm(
      name, lastname, email, password, repeatPassword,
    );

    if (error) {
      setError({
        error,
        message,
      });
      return null;
    }
    setError({
      error: false,
      message: "",
    });
    reset();
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {error.error ? <ErrorAlert text={error.message}/> : null}
      <FormRegister
        inputValues={inputValues}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default RegisterTemplate;

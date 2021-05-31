import React from "react";
import FormLogin from "../../components/organisms/form-login/FormLogin";
import { useForm } from "../../hooks/use-form/useForm";
import { validateLoginData } from "./validate-data-helper";

function LoginTemplate () {
  const [error, setError] = React.useState({
    error: false,
    message: "",
  });

  const [inputValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  function handleSubmit (event) {
    event.preventDefault();
    const { error, message } = validateLoginData(
      inputValues.email, inputValues.password,
    );

    console.log(inputValues);
  }

  return (
    <>
      <FormLogin
        handleSubmit={handleSubmit}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default LoginTemplate;

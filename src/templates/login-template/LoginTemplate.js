import React from "react";
import FormLogin from "./form-login/FormLogin";
import { useForm } from "../../hooks/use-form/useForm";
import { validateLoginData } from "./validate-data-helper";
import ErrorAlert from "../../components/alerts/ErrorAlert";

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
    const { error, message: errorMessage } = validateLoginData(
      inputValues.email, inputValues.password,
    );
    if (error) {
      setError({ error: true, message: errorMessage });
      return null;
    }
    setError({
      error: false,
      message: ""
    })

    console.log(inputValues);
  }

  return (
    <>
      {error.error ? <ErrorAlert text={error.message}/> : null}
      <FormLogin
        handleSubmit={handleSubmit}
        inputValues={inputValues}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default LoginTemplate;

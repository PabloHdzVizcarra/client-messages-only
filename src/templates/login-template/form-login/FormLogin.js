import React from "react";
import PropTypes from 'prop-types';

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

function FormLogin ({handleSubmit, inputValues, handleInputChange}) {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password-email">Password</label>
          <input
            id="password-email"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormLogin;

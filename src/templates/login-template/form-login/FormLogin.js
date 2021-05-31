import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./form-login-style.css";

FormLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

function FormLogin ({ handleSubmit, inputValues, handleInputChange }) {
  return (
    <div className="c-form">
      <h2 className="form__title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            className="form__group__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="password-email">Password</label>
          <input
            id="password-email"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            data-testid="input-password"
            className="form__group__input"
          />
        </div>
        <div className="form__group">
          <button type="submit" className="form__group__submit">Login</button>
          <div className="form__group__link">
            <span>No tienes una cuenta? registrate </span>
            <Link to="/register">Aquí</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;

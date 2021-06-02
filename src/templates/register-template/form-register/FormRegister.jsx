import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./form-register.css";

FormRegister.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValues: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

function FormRegister ({ handleSubmit, inputValues, handleInputChange }) {
  return (
    <div className="c-form">
      <h2 className="form__title">Register User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="name-input">Nombre</label>
          <input
            id="name-input"
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
            className="form__group__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="lastname-input">Apellido</label>
          <input
            id="lastname-input"
            type="text"
            name="lastname"
            value={inputValues.lastname}
            onChange={handleInputChange}
            className="form__group__input"
          />
        </div>
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
          <label htmlFor="password-input">Contraseña</label>
          <input
            data-testid="password1"
            id="password-input"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={handleInputChange}
            className="form__group__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="repeatPassword-input">Repetir Contraseña</label>
          <input
            data-testid="password2"
            id="repeatPassword-input"
            type="password"
            name="repeatPassword"
            value={inputValues.repeatPassword}
            onChange={handleInputChange}
            className="form__group__input"
          />
        </div>
        <div className="form__group">
          <button type="submit" className="form__group__submit">Enviar</button>
          <div className="form__group__link">
            <span>Ya tienes una cuenta? click </span>
            <Link to="/login">Aquí</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormRegister;

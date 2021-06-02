import React from "react";
import PropTypes from "prop-types";
import "./error-alert.css"

ErrorAlert.propTypes = {
  text: PropTypes.string.isRequired,
};

function ErrorAlert ({ text }) {
  return (
    <div data-testid="alert-error" className="c-alert">
      <p className="alert__text">{text}</p>
    </div>
  );
}

export default ErrorAlert;

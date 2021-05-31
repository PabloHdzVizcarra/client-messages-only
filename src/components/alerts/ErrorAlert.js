import React from "react";
import PropTypes from "prop-types";

ErrorAlert.propTypes = {
  text: PropTypes.string.isRequired,
};

function ErrorAlert ({text}) {
  return (
    <div data-testid="alert-error">
      <p>{text}</p>
    </div>
  );
}

export default ErrorAlert;

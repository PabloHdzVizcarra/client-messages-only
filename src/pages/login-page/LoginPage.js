import React from "react";
import "./login-page-styles.css";
import LoginTemplate from "../../templates/login-template/LoginTemplate";

function LoginPage (props) {
  return (
    <div className="container-login">
      <LoginTemplate/>
    </div>
  );
}

export default LoginPage;

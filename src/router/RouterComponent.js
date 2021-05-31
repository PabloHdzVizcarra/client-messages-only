import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/login-page/LoginPage";
import MainPage from "../pages/main-page/MainPage";
import RegisterPage from "../pages/register-page/RegisterPage";

function RouterComponent () {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/">
            <MainPage/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default RouterComponent;

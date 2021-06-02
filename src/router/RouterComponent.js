import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/login-page/LoginPage";
import MainPage from "../pages/main-page/MainPage";
import RegisterPage from "../pages/register-page/RegisterPage";
import { useAuthState } from "../context/authContext";

function RouterComponent () {
  const { isActive } = useAuthState();

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
            {isActive ? <MainPage/> : <RegisterPage/>}
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default RouterComponent;

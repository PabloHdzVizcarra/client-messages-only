import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/login-page/LoginPage";
import MainPage from "../pages/main-page/MainPage";

function RouterComponent (props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/" >
            <MainPage/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default RouterComponent;

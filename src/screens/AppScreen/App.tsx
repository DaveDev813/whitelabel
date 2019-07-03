import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupScreen from "../SignupScreen";
import SignInScreen from "../SignInScreen";
import ForgotPassword from "../ForgotPassword";
import Dashboard from "../Dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignInScreen} />
          <Route exact path="/signup" component={SignupScreen} />
          <Route exact path="/signin" component={SignInScreen} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

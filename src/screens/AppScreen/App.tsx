import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupScreen from "../SignupScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SignupScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

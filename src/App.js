import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path={["/", "/login"]} component={LoginPage}></Route>
          <Route exact path="/signup" component={SingupPage}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

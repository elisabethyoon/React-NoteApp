import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import UpdatePage from "./pages/UpdatePage";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path={["/", "/main"]} component={MainPage}></Route>
          <Route
            exact
            path={"/login"}
            render={(props) => <LoginPage {...props} />}
          ></Route>
          <Route exact path="/signup" component={SingupPage}></Route>
          <Route exact path="/write" component={WritePage}></Route>
          <Route exact path="/update/:noteId" component={UpdatePage}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

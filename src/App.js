import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import history from "./utils/history";
import WritePage from "./pages/WritePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token") || ""
    };
  }
  login = (token) => {
    console.log(token, "받아땅");
    this.setState({
      token: token
    });
  };

  logout = () => {
    console.log("하하하");
    this.setState({
      token: ""
    });
    localStorage.removeItem("token");
    history.push("/login");
  };
  render() {
    return (
      <div>
        <AppHeader token={this.state.token} logout={this.logout} />
        <Switch>
          <Route
            exact
            path={["/", "/login"]}
            render={(props) => <LoginPage {...props} login={this.login} />}
          ></Route>
          <Route exact path="/signup" component={SingupPage}></Route>
          <Route exact path="/main" component={MainPage}></Route>
          <Route exact path="/write" component={WritePage}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

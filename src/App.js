import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import history from "./utils/history";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
  }

  loginFn = (token) => {
    this.setState({
      token: token
    });
  };

  logoutHandler = () => {
    console.log("토근 비워져라!!");
    const confirmCheck = window.confirm("진짜루??");
    console.log(confirmCheck);
    if (confirmCheck) {
      this.setState({
        token: ""
      });
      history.push("/login");
    }
  };

  render() {
    const { token } = this.state;
    return (
      <div>
        <AppHeader usertoken={token} logout={this.logoutHandler} />
        <Switch>
          <Route
            exact
            path={["/", "/login"]}
            render={(props) => (
              <LoginPage
                {...props}
                login={this.loginFn}
                logout={this.logoutHandler}
              />
            )}
          ></Route>
          <Route exact path="/signup" component={SingupPage}></Route>
          <Route exact path="/main" component={MainPage}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SingupPage from "./pages/SingupPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import history from "./utils/history";
import WritePage from "./pages/WritePage";
import UpdatePage from "./pages/UpdatePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 새로고침해도 토큰값 로컬스토리지에서 받아옴
      token: localStorage.getItem("token")
    };
  }

  loginFn = (token) => {
    this.setState({
      token: token
    });
    localStorage.getItem("token");
  };

  logoutHandler = () => {
    const confirmCheck = window.confirm("정말 로그아웃하시겠습니까?");
    if (confirmCheck) {
      this.setState({
        token: ""
      });
      localStorage.removeItem("token");
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
          <Route exact path="/write" component={WritePage}></Route>
          <Route exact path="/update/:userId" component={UpdatePage}></Route>
          <Route exact path="*" component={ErrorPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

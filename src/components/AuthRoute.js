import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

class AuthRoute extends Component {
  render() {
    const { component: Components, token, ...rest } = this.props;
    if (token) {
      return (
        <Route {...rest} render={(props) => <Components {...props} />}></Route>
      );
    } else {
      alert("로그인정보가 없습니다. 로그인페이지로 이동합니다.");
      return <Redirect to={"/login"} />;
    }
  }
}

export default AuthRoute;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { observer, inject } from "mobx-react";

@inject("loginStore")
@observer
class AppHeader extends Component {
  logout = () => {
    const { loginStore } = this.props;
    loginStore.logout();
  };
  render() {
    const { loginStore } = this.props;
    const token = loginStore.token;
    return (
      <header>
        <div>
          <NavLink to={token ? "/main" : "/login"} className="logo">
            NOTE
          </NavLink>
        </div>
        <div className="navigations">
          {token ? (
            <button onClick={this.logout}>로그아웃</button>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
              <NavLink to="/signup">회원가입</NavLink>
            </>
          )}
        </div>
      </header>
    );
  }
}

export default AppHeader;

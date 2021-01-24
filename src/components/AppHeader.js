import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class AppHeader extends Component {
  render() {
    const { token, logout } = this.props;
    return (
      <header>
        <div>
          <NavLink to={token ? "/main" : "/login"} className="logo">
            NOTE
          </NavLink>
        </div>
        <div className="navigations">
          {token ? (
            <button onClick={logout}>로그아웃</button>
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

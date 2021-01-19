import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class AppHeader extends Component {
  logout = () => {
    this.props.logout();
  };
  render() {
    const { usertoken } = this.props;
    return (
      <header>
        <div>
          <NavLink to="/login" className="logo">
            NOTE
          </NavLink>
        </div>
        <div className="navigations">
          {usertoken ? (
            <button type="button" onClick={this.logout}>
              로그아웃
            </button>
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

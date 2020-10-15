import React, { Component } from "react";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <form action="" className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input id="username" type="text" />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input id="password" type="password" />
              </div>
              <button type="submit" className="btn">
                로그인
              </button>
            </form>
            <p className="log"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
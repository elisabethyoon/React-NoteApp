import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

@inject("loginStore")
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <div className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input id="username" type="text" name="username" />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input id="password" type="password" name="password" />
              </div>
              <button type="button" className="btn">
                로그인
              </button>
            </div>
            <p className="log"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

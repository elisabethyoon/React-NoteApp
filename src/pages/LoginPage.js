import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("loginStore")
@observer
class Login extends Component {
  // input value
  onChangeValueLogin = (e) => {
    const { loginStore } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    loginStore.onChangeValueLogin(name, value);
  };

  // 로그인
  onSubmitLogin = () => {
    const { loginStore } = this.props;
    loginStore.onSubmitLogin();
  };
  render() {
    const { loginStore } = this.props;
    const { formValueLogin } = loginStore;
    const { username, password } = formValueLogin;
    return (
      <div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <div className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.onChangeValueLogin}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeValueLogin}
                />
              </div>
              <button
                type="button"
                className="btn"
                onClick={this.onSubmitLogin}
              >
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

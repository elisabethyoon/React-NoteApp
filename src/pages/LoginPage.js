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
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <h1 className="page-header">Login</h1>
            <div className="form">
              <div>
                <label htmlFor="username">ID</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="ID"
                  onChange={this.onChangeValueLogin}
                />
              </div>
              <div>
                <label htmlFor="password">PW</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="PW"
                  onChange={this.onChangeValueLogin}
                />
              </div>
              <button
                type="button"
                className="btn"
                onClick={this.onSubmitLogin}
              >
                LOG IN
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

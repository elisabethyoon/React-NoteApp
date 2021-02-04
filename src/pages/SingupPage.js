import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("loginStore")
@observer
class SingupPage extends Component {
  // input value
  onChangeValue = (e) => {
    const { loginStore } = this.props;
    const value = e.target.value;
    const name = e.target.name;
    loginStore.onChangeValue(name, value);
  };

  // 회원가입
  onSubmitForm = () => {
    const { loginStore } = this.props;
    loginStore.onSubmitForm();
  };
  render() {
    const { loginStore } = this.props;
    const { formValueSignup } = loginStore;
    const { username, password, nickname } = formValueSignup;
    return (
      <div>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <h1 className="page-header">SIGN UP</h1>
            <div action="" className="form">
              <div>
                <label htmlFor="username">ID</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="ID"
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">PW</label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  value={password}
                  placeholder="PW"
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="nickname">NICKNAME</label>
                <input
                  id="nickname"
                  type="text"
                  name="nickname"
                  value={nickname}
                  placeholder="NICKNAME"
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="button" className="btn" onClick={this.onSubmitForm}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingupPage;

import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { toJS } from "mobx";

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
        <h1 className="page-header">회원가입</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <div action="" className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="nickname">nickname: </label>
                <input
                  id="nickname"
                  type="text"
                  name="nickname"
                  value={nickname}
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="button" className="btn" onClick={this.onSubmitForm}>
                회원 가입
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingupPage;

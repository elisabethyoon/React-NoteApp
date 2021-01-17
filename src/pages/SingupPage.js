import React, { Component } from "react";

export class SingupPage extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">회원가입</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <form action="" className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input id="username" type="text" />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input id="password" type="text" />
              </div>
              <div>
                <label htmlFor="nickname">nickname: </label>
                <input id="nickname" type="text" />
              </div>
              <button type="submit" className="btn">
                회원 가입
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SingupPage;

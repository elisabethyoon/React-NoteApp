import React, { Component } from "react";

export class SingupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 className="page-header">회원가입</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <div action="" className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input id="username" type="text" name="username" />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input id="password" type="text" name="password" />
              </div>
              <div>
                <label htmlFor="nickname">nickname: </label>
                <input id="nickname" type="text" name="nickname" />
              </div>
              <button type="button" className="btn">
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

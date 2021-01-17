import React, { Component } from "react";
import { AST_Await } from "terser";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <form action="" className="form">
              <div>
                <label htmlFor="username">id:</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={this.onChangeValue}
                />
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

export default Login;

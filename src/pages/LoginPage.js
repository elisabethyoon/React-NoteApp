import React, { Component } from "react";
import Api from "../utils/Api";
import history from "../utils/history";

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

  onSubmit = () => {
    const { username, password } = this.state;
    Api.post("login", {
      username,
      password
    })
      .then((response) => {
        const token = response.data.token;
        const username = response.data.user.username;
        this.props.login(token);
        localStorage.setItem("token", token);
        alert(`${username}님 반갑습니다. 메인화면으로 이동합니다.`);
        history.push("/main");
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h1 className="page-header">로그인</h1>
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
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.onChangeValue}
                />
              </div>
              <button type="button" className="btn" onClick={this.onSubmit}>
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

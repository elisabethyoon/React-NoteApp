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

  // 로그인 버튼 클릭
  login = () => {
    const { username, password } = this.state;
    const apiparams = {
      username: username,
      password: password
    };
    Api.post("login", apiparams)
      .then((response) => {
        const token = response.data.token;
        this.props.login(token);
        const username = response.data.user.username;
        alert(`${username}님 반가워용! 메인으로 이동할게유`);
        history.push("/main");
      })
      .catch((error) => console.log(error));
    // axios를 이용하여 로그인 정보를 전달하고 응답값을 받아온다.
  };
  render() {
    const { username, password } = this.state;
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
              <button type="button" className="btn" onClick={this.login}>
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

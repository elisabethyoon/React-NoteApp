import React, { Component } from "react";
import axios from "axios";
import history from "../utils/history";

export class SingupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      nickname: ""
    };
  }

  onChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmitSignup = () => {
    const { username, password, nickname } = this.state;
    const apiParams = { username, password, nickname };
    axios
      .post("http://localhost:3001/signup", apiParams)
      .then((response) => {
        const name = response.data.username;
        alert(
          `${name} 님 회원가입을 축하드립니다. 로그인 페이지로 이동합니다.`
        );
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };
  render() {
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
                  value={this.state.username}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeValue}
                />
              </div>
              <div>
                <label htmlFor="nickname">nickname: </label>
                <input
                  id="nickname"
                  type="text"
                  name="nickname"
                  value={this.state.nickname}
                  onChange={this.onChangeValue}
                />
              </div>
              <button
                type="button"
                className="btn"
                onClick={this.onSubmitSignup}
              >
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

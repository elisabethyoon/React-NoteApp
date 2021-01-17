import React, { Component } from "react";
import Api from "../utils/Api";
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

  onSubmitForm = () => {
    const { username, password, nickname } = this.state;
    const apiParams = {
      username,
      password: password,
      nickname: nickname
    };
    Api.post("signup", apiParams)
      .then((response) => {
        alert(
          `${response.data.username}님 회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.`
        );
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { username, password, nickname } = this.state;
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

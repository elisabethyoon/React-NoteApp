import React, { Component } from "react";
import axios from 'axios'
import history from '../utils/History'

class SignupPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			nickname: "",
		}
	}
	onChangeForm = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		console.log(name, value)
		this.setState({
			[name]: value,
		})
	}
	onSubmitForm = () => {
		console.log(this.props);
		const apiParams = {
			username: this.state.username,
			password: this.state.password,
			nickname: this.state.nickname,
		}

		axios.post('http://localhost:3000/signup', apiParams)
		.then(({ data }) => {
			const nickname = data.nickname;
			alert(`${nickname}님 가입축하드립니다. 로그인 페이지로 이동합니다.`)
			history.push('/login')
		})
		.catch(error => console.log(error))
	}

  render() {
    return (
      <div>
        <h1 className="page-header">회원가입</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
						<div className="form">
							<div>
								<label htmlFor="username">id:</label>
								<input id="username" type="text" name="username" onChange={this.onChangeForm} />
							</div>
							<div>
								<label htmlFor="password">pw: </label>
								<input id="password" type="text" name="password" onChange={this.onChangeForm}/>
							</div>
							<div>
								<label htmlFor="nickname">nickname: </label>
								<input id="nickname" type="text" name="nickname" onChange={this.onChangeForm} />
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

export default SignupPage;
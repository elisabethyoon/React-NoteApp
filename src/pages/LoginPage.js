import React, { Component } from 'react'
import instance from '../api/Api'

class LoginPage extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: '',
		}
	}

	onChangeForm = (e) => {
		const target = e.target
		const name = target.name
		const value = target.value

		this.setState({
			[name]: value
		})
	}

	onSubmitForm = (e) => {
		e.preventDefault();

		instance.post('/login', {username: this.state.username , password: this.state.password})
			.then((response) => {
				console.log('로그인')
				const token = response.data.token;
				localStorage.setItem('token', token)
				const nickname = response.data.user.nickname
				alert(`${nickname}님 반갑습니당. 메인으로 이동쓰~!`)
				this.props.history.push('/main')
			})
			.catch(error => console.log(error.response))
		
	}
	render() {
		return (
			<div>
        <h1 className="page-header">로그인</h1>
        <div className="contents">
          <div className="form-wrapper form-wrapper-sm">
            <form action="" className="form" onSubmit={this.onSubmitForm} >
              <div>
                <label htmlFor="username">id:</label>
                <input id="username" type="text" name="username" onChange={this.onChangeForm}/>
              </div>
              <div>
                <label htmlFor="password">pw: </label>
                <input id="password" type="password" name="password" onChange={this.onChangeForm} />
              </div>
              <button type="submit" className="btn" >
                로그인
              </button>
            </form>
            <p className="log"></p>
          </div>
        </div>
      </div>
		)
	}
}

export default LoginPage

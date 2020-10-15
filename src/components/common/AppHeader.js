import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
	render() {
		return (
			<header>
				<div>
					<NavLink to="/login" className="logo">
						NOTE
					</NavLink>
				</div>
				<div className="navigations">
					<NavLink to="/login">로그인</NavLink>
					<NavLink to="/signup">회원가입</NavLink>
				</div>
			</header>
		)
	}
}

export default AppHeader

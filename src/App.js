import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AppHeader from './components/common/AppHeader'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

class App extends Component {
  render() {
    return (
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path={'/login'} component={LoginPage}></Route>
          <Route exact path={'/signup'} component={SignupPage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import AppHeader from './components/common/AppHeader'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Main from './pages/Main'
import ListWrite from './pages/ListWrite'

class App extends Component {
  render() {
    return (
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path={'/login'} component={LoginPage}></Route>
          <Route exact path={'/signup'} component={SignupPage}></Route>
          <Route exact path="/main" component={Main} />
          <Route exact path="/write" component={ListWrite}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

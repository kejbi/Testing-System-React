import React, { Component } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route, withRouter, Switch } from 'react-router-dom';
import StudentTests from './components/StudentTests';
import LoginForm from './components/security/LoginForm';
import { getProfile, loggedIn } from './components/security/AuthService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    console.log('jestem tu');
    this.setState({
      isAuthenticated: true,
      user: getProfile()
    });
    console.log(loggedIn());

    this.props.history.push('/me');
  }

  logout() {
    this.setState({
      isAuthenticated: false,
      user: null
    });
    this.props.history.push('/logout');
  }
  render() {
    return (
      <div>
        <AppNavBar
          isAuthenticated={this.state.isAuthenticated}
          onLogout={this.logout}
        />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route exact path="/me" component={Profile} />
          <Route
            path="/student/tests"
            render={() => <StudentTests isStudent={true} />}
          />
          <Route
            path="/login"
            render={() => <LoginForm onLogin={this.login} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Profile from './components/profile/Profile';
import { Route, withRouter, Switch } from 'react-router-dom';
import StudentTests from './components/quizzes/StudentTests';
import LoginForm from './components/security/LoginForm';
import { getProfile, loggedIn } from './components/security/AuthService';
import SolveQuizForm from './components/quizzes/SolveQuizForm';
import Questions from './components/questions/Questions';
import PrepareQuiz from './components/quizzes/PrepareQuiz';
import TeacherTests from './components/quizzes/TeacherTests';
import TestDeatails from './components/quizzes/TestDeatails';
import SolvedTests from './components/quizzes/SolvedTests';
import Results from './components/quizzes/Results';
import AccountDetails from './components/AccountDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    getProfile()
      .then(response => {
        this.setState({
          user: response
        });
        this.props.history.push('/me');
      })
      .catch(() => this.props.history.push('/'));
  }

  logout() {
    this.setState({
      user: null
    });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <AppNavBar isAuthenticated={loggedIn()} onLogout={this.logout} />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route
            exact
            path="/me"
            render={props => <Profile user={this.state.user} {...props} />}
          />
          <Route
            path="/student/tests"
            render={props => <StudentTests user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/student/solve/:id"
            render={props => (
              <SolveQuizForm user={this.state.user} {...props} />
            )}
          />
          <Route
            exact
            path="/teacher/prepare/"
            render={props => <PrepareQuiz user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/teacher/questions"
            render={props => <Questions user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/teacher/quizzes"
            render={props => <TeacherTests user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/teacher/quiz/:id"
            render={props => <TestDeatails user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/teacher/quizresults/:id"
            render={props => <Results user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/student/solved"
            render={props => <SolvedTests user={this.state.user} {...props} />}
          />
          <Route
            exact
            path="/student/account"
            render={props => (
              <AccountDetails user={this.state.user} {...props} />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <LoginForm
                onLogin={this.login}
                user={this.state.user}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

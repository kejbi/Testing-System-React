import React, { Component } from 'react';
import './Home.css';
import { loggedIn } from './security/AuthService';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    if (loggedIn()) {
      this.props.history.replace('/me');
    }
  }
  render() {
    return (
      <div className="home-page">
        <h1>Welcome to Test Them All</h1>
        <p>Test them all is a ...</p>
      </div>
    );
  }
}

export default withRouter(Home);

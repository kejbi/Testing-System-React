import React, { Component } from 'react';
import './Home.css';
import logo from '../Logo.jpg';
import { loggedIn } from './security/AuthService';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    if (loggedIn()) {
      this.props.history.replace('/me');
    }
  }
  render() {
    return (
      <Container className="home-page">
        <div className="item1">
          <h1>Welcome to Test Them All</h1>
        </div>

        <div className="item2">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </Container>
    );
  }
}

export default withRouter(Home);

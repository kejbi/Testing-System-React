import React, { Component } from 'react';
import './AppNavBar.css';
import {
  Navbar,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { logout } from './security/AuthService';

class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    logout();
    this.props.onLogout();
  }

  render() {
    if (!this.props.isAuthenticated) {
      return (
        <Navbar className="navbar" expand="md">
          <NavbarBrand className="nav-link" tag={Link} to="/">
            TestThemAll
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar />
          <Nav navbar>
            <NavItem className="nav-link" tag={Link} to="/login">
              Sign In
            </NavItem>
          </Nav>
        </Navbar>
      );
    } else {
      return (
        <Navbar className="navbar" expand="md">
          <NavbarBrand className="nav-link" tag={Link} to="/me">
            TestThemAll
          </NavbarBrand>

          <NavbarToggler />
          <Collapse navbar />
          <Nav navbar>
            <NavItem
              className="nav-link"
              tag={Link}
              to="/"
              onClick={this.handleLogout}
            >
              Log Out
            </NavItem>
          </Nav>
        </Navbar>
      );
    }
  }
}

export default withRouter(AppNavBar);

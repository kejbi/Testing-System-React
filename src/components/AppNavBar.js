import React, {Component} from 'react';
import './AppNavBar.css';
import {Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import {Link} from 'react-router-dom'

function SignInOrLogout(props) {
    if(props.isAuthenticated) {
        return <NavItem><Link className="nav-link" to="/me">Log out</Link></NavItem>;
    }
    else {
        return <NavItem><Link className="nav-link" to="/me">Sing in</Link></NavItem>;
    }
}

class AppNavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {isOpen: false, isAuthenticated: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(
            {isOpen: !this.state.isOpen}
        );
    }
    componentDidMount(){
        this.setState(
            {isAuthenticated: this.props.isAuthenticated}
        )
    }

    render() {
        return(
            <Navbar className="navbar" expand="md">
                <NavbarBrand>
                    <Link className="nav-link" to="/">Test Them All</Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <SignInOrLogout isAuthenticated = {this.state.isAuthenticated}/>
                    </Nav>
                </Collapse>
            
            </Navbar>
        ) 
    }
}

export default AppNavBar;
import React, { Component } from 'react';
import './LoginForm.css';
import { loggedIn, login, setToken } from './AuthService';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <Container className="container">
        <Form className="form">
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}>
            Log In
          </Button>
        </Form>
      </Container>
    );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    login(this.state.username, this.state.password)
      .then(response => {
        setToken(response.accessToken);
        this.props.onLogin();
      })
      .catch(err => {
        console.log(err);
        alert('bad credentials');
      });
  }

  componentWillMount() {
    if (loggedIn()) this.props.history.replace('/me');
  }
}

export default LoginForm;

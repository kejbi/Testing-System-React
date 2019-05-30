import React, { Component } from 'react';
import './StudentTests.css';
import { Container, Table, Progress, Alert } from 'reactstrap';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';
import { withRouter } from 'react-router-dom';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solvedTests: []
    };
  }

  componentWillMount() {
    customFetch(BASE_URL + 'solved/quiz/' + this.props.match.params.id, {
      method: 'GET'
    }).then(response => {
      this.setState({
        solvedTests: response
      });
    });
  }

  render() {
    let i = 0;
    if (!this.props.user.student) {
      return (
        <Container className="container">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Quiz name</th>
                <th>Student</th>
                <th>Score</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.solvedTests.map(solvedTest => {
                return (
                  <tr>
                    <th scope="row">{++i}</th>
                    <td>{solvedTest.name}</td>
                    <td>{solvedTest.student}</td>
                    <td>{solvedTest.score}</td>
                    <td>
                      <div className="text-center">
                        {solvedTest.percent + '%'}
                      </div>
                      <Progress value={solvedTest.percent} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      );
    } else {
      return (
        <Container className="container">
          <Alert color="danger" className="alert">
            You're not a teacher!
          </Alert>
        </Container>
      );
    }
  }
}

export default withRouter(Results);

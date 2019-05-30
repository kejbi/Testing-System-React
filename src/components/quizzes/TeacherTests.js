import React, { Component } from 'react';
import './StudentTests.css';
import { Container, Alert, Table, Button } from 'reactstrap';
import { customFetch } from '../security/AuthService';
import { withRouter, Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

class TeacherTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
  }

  componentWillMount() {
    customFetch(BASE_URL + 'quizzes/teacher/' + this.props.user.id, {
      method: 'GET'
    }).then(response => {
      this.setState({
        quizzes: response
      });
    });
  }
  render() {
    let i = 1;
    if (!this.props.user.student) {
      return (
        <Container className="container">
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Quiz name</th>
                <th>No. of questions</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.quizzes.map(quiz => {
                return (
                  <tr>
                    <td>{i++}</td>
                    <td>{quiz.name}</td>
                    <td>{quiz.numberOfQuestions}</td>
                    <td>
                      <Button
                        color="primary"
                        tag={Link}
                        to={'/teacher/quiz/' + quiz.id}
                      >
                        Details
                      </Button>
                    </td>
                    <td>
                      <Button
                        color="danger"
                        tag={Link}
                        to={'/teacher/quizresults/' + quiz.id}
                      >
                        Results
                      </Button>
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

export default withRouter(TeacherTests);

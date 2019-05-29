import React, { Component } from 'react';
import './StudentTests.css';
import { Container, Table, Progress } from 'reactstrap';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';

class SolvedTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solvedTests: []
    };
  }

  componentWillMount() {
    customFetch(BASE_URL + 'solved/student/' + this.props.user.id, {
      method: 'GET'
    }).then(response => {
      this.setState({
        solvedTests: response
      });
    });
  }

  render() {
    let i = 0;
    return (
      <Container className="container">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Quiz name</th>
              <th>Your score</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.solvedTests.map(solvedTest => {
              return (
                <tr>
                  <th scope="row">{++i}</th>
                  <td>{solvedTest.name}</td>
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
  }
}

export default SolvedTests;

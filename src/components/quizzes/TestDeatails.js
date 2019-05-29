import React, { Component } from 'react';
import {
  Container,
  Alert,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';

class TestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  componentWillMount() {
    customFetch(BASE_URL + 'questions/quiz/' + this.props.match.params.id, {
      method: 'GET'
    }).then(response => {
      this.setState({
        questions: response
      });
    });
  }

  render() {
    let i = 1;
    if (!this.props.user.student) {
      return (
        <Container className="container">
          <ListGroup>
            {this.state.questions.map(question => {
              return (
                <ListGroupItem>
                  <ListGroupItemHeading>
                    {'No. ' + i++ + ' ' + question.question}
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    <ListGroup>
                      <ListGroupItem>{question.ans1}</ListGroupItem>
                      <ListGroupItem>{question.ans2}</ListGroupItem>
                      <ListGroupItem>{question.ans3}</ListGroupItem>
                      <ListGroupItem>{question.ans4}</ListGroupItem>
                    </ListGroup>
                  </ListGroupItemText>
                </ListGroupItem>
              );
            })}
          </ListGroup>
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

export default withRouter(TestDetails);

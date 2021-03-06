import React, { Component } from 'react';
import {
  Container,
  Label,
  Input,
  Form,
  FormGroup,
  Button,
  Alert
} from 'reactstrap';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';
import { withRouter } from 'react-router-dom';
import './PrepareQuiz.css';

class SolveQuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnswered: [],
      questions: [],
      answers: []
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isAnswered.forEach(answer => {
      if(!answer){
        alert('ANswer all questions');
        return;
      }
    })
    customFetch(BASE_URL + 'solved', {
      method: 'POST',
      body: JSON.stringify({
        quizId: this.props.match.params.id,
        answers: this.state.answers,
        studentId: this.props.user.id
      })
    })
      .then(() => this.props.history.replace('/student/solved'))
      .catch(() => this.props.history.replace('/student/solved'));
  }

  handleOnChange(event) {
    let newAnswers = this.state.answers;
    let newAnswered = this.state.isAnswered;
    newAnswered[event.target.name] = true;
    newAnswers[event.target.name] = event.target.value;
    this.setState({
      isAnswered: newAnswered,
      answers: newAnswers
    });
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
    let i = 0;
    if (this.props.user.student) {
      return (
        <Container className="container">
          <Form>
            {this.state.questions.map(question => {
              let tab = this.state.isAnswered
              tab.push(false);
              this.setState({
                isAnswered: tab
              })
              return (
                <FormGroup check>
                  <Label className="question">
                    {'Question no. ' + ++i + '. ' + question.question}
                  </Label>
                  <div>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name={i - 1}
                          value="1"
                          onChange={this.handleOnChange}
                        />
                        {question.ans1}
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name={i - 1}
                          value="2"
                          onChange={this.handleOnChange}
                        />
                        {question.ans2}
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name={i - 1}
                          value="3"
                          onChange={this.handleOnChange}
                        />
                        {question.ans3}
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name={i - 1}
                          value="4"
                          onChange={this.handleOnChange}
                        />
                        {question.ans4}
                      </Label>
                    </FormGroup>
                  </div>
                </FormGroup>
              );
            })}
            <br />
            <Button onClick={this.handleClick}>Submit</Button>
          </Form>
        </Container>
      );
    } else {
      return (
        <Container className="container">
          <Alert color="danger" className="alert">
            You're not a student!
          </Alert>
        </Container>
      );
    }
  }
}

export default withRouter(SolveQuizForm);

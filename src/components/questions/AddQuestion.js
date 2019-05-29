import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      ans1: '',
      ans2: '',
      ans3: '',
      ans4: '',
      correct: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <Container className="container">
        <Form className="form">
          <FormGroup>
            <Label for="question">Question:</Label>
            <Input
              type="text"
              name="question"
              id="question"
              placeholder="question"
              onChange={this.handleChange}
              value={this.state.question}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ans1">Answer 1:</Label>
            <Input
              type="text"
              name="ans1"
              id="ans1"
              placeholder="ans1"
              onChange={this.handleChange}
              value={this.state.ans1}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ans2">Answer 2:</Label>
            <Input
              type="text"
              name="ans2"
              id="ans2"
              placeholder="ans2"
              onChange={this.handleChange}
              value={this.state.ans2}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ans3">Answer 3:</Label>
            <Input
              type="text"
              name="ans3"
              id="ans3"
              placeholder="ans3"
              onChange={this.handleChange}
              value={this.state.ans3}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ans4">Answer 4:</Label>
            <Input
              type="text"
              name="ans4"
              id="ans4"
              placeholder="ans4"
              onChange={this.handleChange}
              value={this.state.ans4}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Correct</Label>
            <Input
              type="select"
              name="correct"
              id="correct"
              onChange={this.handleChange}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </Input>
          </FormGroup>
          <Button color="primary" onClick={this.handleSubmit}>
            Submit
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
    if (
      this.state.question === '' ||
      this.state.ans1 === '' ||
      this.state.ans2 === '' ||
      this.state.ans3 === '' ||
      this.state.ans4 === ''
    ) {
      alert('Give all details');
    } else {
      customFetch(BASE_URL + 'questions', {
        method: 'POST',
        body: JSON.stringify({
          question: this.state.question,
          ans1: this.state.ans1,
          ans2: this.state.ans2,
          ans3: this.state.ans3,
          ans4: this.state.ans4,
          correct: this.state.correct
        })
      }).then(response => {
        console.log(response);
        this.props.onAdd(response.questionId);
        this.setState({
          question: '',
          ans1: '',
          ans2: '',
          ans3: '',
          ans4: '',
          correct: 1
        });
      });
    }
  }

  componentWillMount() {
    //  if (!loggedIn()) this.props.history.replace('/signin');
  }
}

export default AddQuestion;

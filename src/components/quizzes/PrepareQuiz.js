import React, { Component } from 'react';
import AddQuestion from '../questions/AddQuestion';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from 'reactstrap';
import './PrepareQuiz.css';
import { withRouter } from 'react-router-dom';
import { customFetch } from '../security/AuthService';
import { BASE_URL } from '../constants';

class PrepareQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupid: 1,
      name: '',
      groups: [],
      disabled: {},
      chosenQuestions: [],
      questions: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.addFromList = this.addFromList.bind(this);
  }

  onAdd(id) {
    let tab = this.state.chosenQuestions;
    tab.push(id);
    this.setState({
      chosenQuestions: tab
    });
    console.log(this.state.chosenQuestions);
  }

  addFromList(e) {
    let tab = this.state.chosenQuestions;
    let dis = this.state.disabled;
    tab.push(e.target.value);
    dis[e.target.value] = true;
    this.setState({
      chosenQuestions: tab,
      disabled: dis
    });
    console.log(this.state.chosenQuestions);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit() {
    console.log(this.state);
    customFetch(BASE_URL + 'quizzes', {
      method: 'POST',
      body: JSON.stringify({
        groupId: this.state.groupid,
        name: this.state.name,
        teacherId: this.props.user.id,
        questions: this.state.chosenQuestions
      })
    }).then(this.props.history.push('/me'));
  }

  componentWillMount() {
    customFetch(BASE_URL + 'questions/all', {
      method: 'GET'
    }).then(response => {
      this.setState({
        questions: response
      });
    });
    customFetch(BASE_URL + 'groups/all', {
      method: 'GET'
    }).then(response => {
      this.setState({
        groups: response
      });
    });

    console.log(this.state.groupid);
  }

  render() {
    let i = 0;
    return (
      <Container className="container">
        <Form>
          <FormGroup>
            <Label for="name">Quiz Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="quiz name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Group</Label>
            <Input
              type="select"
              name="groupid"
              id="groupid"
              onChange={this.handleChange}
            >
              {this.state.groups.map(group => {
                return <option value={group.id}>{group.name}</option>;
              })}
            </Input>
          </FormGroup>
          <AddQuestion onAdd={this.onAdd} />
          <br />
          <div className="question-table">
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Question</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.questions.map(question => {
                  return (
                    <tr>
                      <th>{++i}</th>
                      <td>{question.question}</td>
                      <td>
                        <Button
                          value={question.questionId}
                          onClick={this.addFromList}
                          disabled={this.state.disabled[question.questionId]}
                        >
                          Add
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>

          <Button color="primary" onClick={this.handleSubmit}>
            Send
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(PrepareQuiz);

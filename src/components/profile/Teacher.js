import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import './Profile.css';

class Teacher extends Component {
  render() {
    return (
      <Container className="container">
        <Row className="nav-options">
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Your quizzes</CardTitle>
                <CardText>Take a look on quizzes you made!</CardText>
                <Button tag={Link} to="/teacher/quizzes">
                  Go!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Base of questions</CardTitle>
                <CardText>Check out questions in data base!</CardText>
                <Button tag={Link} to="/teacher/questions">
                  Go!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Create quiz</CardTitle>
                <CardText>Prepare quiz for your students!</CardText>
                <Button tag={Link} to="/teacher/prepare">
                  Go!
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Teacher);

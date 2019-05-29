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

class Student extends Component {
  render() {
    return (
      <Container className="container">
        <Row className="nav-options">
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Quizzes to solve</CardTitle>
                <CardText>Check out tests, that wait for You!</CardText>
                <Button tag={Link} to="/student/tests">
                  Go!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Solved quizzes</CardTitle>
                <CardText>Take a look on you past results!</CardText>
                <Button tag={Link} to="/student/solved">
                  Go!
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card body color="primary" inverse>
              <CardBody>
                <CardTitle>Account details</CardTitle>
                <CardText>Find out what is your name!</CardText>
                <Button tag={Link} to="/student/account">
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

export default withRouter(Student);

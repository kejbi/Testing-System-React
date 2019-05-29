import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class AccountDetails extends Component {
  render() {
    return (
      <Container className="container">
        <ListGroup>
          <ListGroupItem>
            <b>Id: </b>
            {this.props.user.id}
          </ListGroupItem>
          <ListGroupItem>
            <b>Username: </b>
            {this.props.user.name}
          </ListGroupItem>
          <ListGroupItem>
            <b>Group: </b>
            {this.props.user.groupName}
          </ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

export default withRouter(AccountDetails);

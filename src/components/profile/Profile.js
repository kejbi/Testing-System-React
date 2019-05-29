import React, { Component } from 'react';
import './Profile.css';
import { withRouter } from 'react-router-dom';

import Teacher from './Teacher';
import Student from './Student';

class Profile extends Component {
  render() {
    console.log(this.props.user);
    if (this.props.user.student) {
      return <Student {...this.props} />;
    } else {
      return <Teacher {...this.props} />;
    }
  }
}

export default withRouter(Profile);

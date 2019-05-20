import React, {Component} from 'react';
import './StudentTests.css';
import {Container, Alert, Table, Button } from 'reactstrap';

class StudentTests extends Component {
    
    render() {
        if(this.props.isStudent) {
            return (
                <Container className = "container">
                    <Table striped>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Quiz name</th>
                            <th>No. of questions</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><Button color = "success" >Solve it</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Container>
            )
        }   
        else {
            return (
                <Container className = "container">
                    <Alert color = "danger" className = "alert">
                        You're not a student!
                    </Alert>    
                </Container>
            )
        } 
    }
}
    
export default StudentTests;
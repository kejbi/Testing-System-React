import React, {Component} from 'react';
import './Profile.css';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class Profile extends Component {


    render() {
        if(this.props.isStudent) {
            return(
                <Container fluid = {true}>
                    <Row className = "nav-options">
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Testy do rozwiązania
                                    </CardTitle>
                                    <CardText>
                                        Zobacz testy, które oczekują na rozwiązanie
                                    </CardText>
                                    <Button>
                                        Przejdź
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Rozwiązane testy
                                    </CardTitle>
                                    <CardText>
                                        Zobacz swoje wyniki z poprzednich testów
                                    </CardText>
                                    <Button>
                                        Przejdź                                        
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Inna opcja
                                    </CardTitle>
                                    <CardText>
                                        Zobacz testy, które oczekują na rozwiązanie
                                    </CardText>
                                    <Button>
                                        Przejdź                                        
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return (
                <Container fluid = {true}>
                    <Row className = "nav-options">
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Twoje testy
                                    </CardTitle>
                                    <CardText>
                                        Zobacz testy, które stworzyłeś
                                    </CardText>
                                    <Button>
                                        Przejdź
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Baza pytań
                                    </CardTitle>
                                    <CardText>
                                        Sprawdź jakie pytania znajdują się w bazie
                                    </CardText>
                                    <Button>
                                        Przejdź                                        
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card color="warning" inverse>
                                <CardBody>
                                    <CardTitle>
                                        Stwórz test
                                    </CardTitle>
                                    <CardText>
                                        Przygotuj test dla swoich uczniów
                                    </CardText>
                                    <Button>
                                        Przejdź                                        
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }
        
    }
}

export default Profile;
import React, { Component } from 'react';
import { Button, Row} from 'reactstrap';
import { Card, Container, Col } from 'reactstrap';
import './styles/quizStyle.css';

export class Unauth extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        console.log(this.state)
        return (
            <Container>
            <Row>
                <Card body outline color="info" style={{textAlign:"center", marginTop: '50px', minWidth: "100%"}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1 style={{color:'red'}}>NOT AUTHORIZED!</h1>
                        <br/>
                        <hr />
                        <br />
                    </div>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <Button name='login' onClick={(e) => window.location.replace('/login')} color="primary">
                        Click to Log In!
                        </Button>
                        </Col>
                        <Col>
                        <Button name='home' onClick={(e) => window.location.replace('/')} color="secondary">
                        Go Back to Homepage
                        </Button>
                        </Col>
                    </Row>
                    
                </Col>
                </Card>
            </Row>
            </Container>
        )
    } 
}

export default Unauth; 

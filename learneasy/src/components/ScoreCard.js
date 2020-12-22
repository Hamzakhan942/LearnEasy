import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardHeader, CardBody,CardTitle, CardText } from 'reactstrap';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            subject: '',
            marks: '',
            total:'',
            comments: ''
        }
    }

    componentDidMount(){
        this.setState(this.props)
    }

    render(){
        return(
            <Container fluid>
            <Row style={{marginBottom: '20px'}}>
            <Col lg={{size: 4}}  md={{size: 12}} sm={{size: 12}} xs={{size: 12}}>
            <Card style={{height: "30vh"}}>
                    <CardHeader tag="h3" style={{textAlign: "left"}}>Quiz Report</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Subject: {this.state.subject}</CardTitle>
                        <hr />
                        <CardText>You Scored: {this.state.marks}</CardText>
                        <CardText>Total: {this.state.total}</CardText>
                    </CardBody>
                </Card>
            </Col>
                <Col lg={{size: 8}} md={{size: 12}} sm={{size: 12}} xs={{size: 12}}>
                <Card style={{height: "30vh"}}>
                    <CardHeader tag="h3" style={{textAlign: "left"}}>Teacher's Comments</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Subject: {this.state.subject}</CardTitle>
                        <hr />
                        <CardText><b>{this.state.comments}</b></CardText>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}
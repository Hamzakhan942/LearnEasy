import React, { Component } from "react";
import { Badge, Container, Row, Col } from 'reactstrap';
import { Card, Button, CardHeader, CardBody,CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import ScoreCard from './ScoreCard';
import { Link } from "react-router-dom";

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            authorize: false,
            username: '',
            email: '',
            rollno: '',
            scores: [{'subject': 'english', 'marks': '15', 'total': '20', 'comments': 'You Showed Major Improvement!'}]
        }
    }

    // componentDidMount(){
    //     axios.get('/student/details')
    //     .then(response => response.data)
    //     .then(details => {
    //         let newState = {...details, authorize: true}
    //         this.setState(newState)
    //     })
    // }
    componentDidMount(){
        axios.get('/student/details')
        .then(response => response.data)
        .then(details => {
            this.setState({authorize: true})
            let newState = {
                username: details.username, 
                email: details.email,
                rollno: details.rollno,
            }
            let newScore={}
            details.scores.forEach(element => {
                newScore = element.score
                
            });
        })
    }
    render(){
        if(this.state.authorize){
            return(
                <div>
                <Card style={{margin: '15px'}}>
                    <CardHeader tag="h3" style={{textAlign: "center"}}>Welcome {this.state.username}</CardHeader>
                    <CardBody>
                        <CardTitle tag="h5">Ready for a quiz?</CardTitle>
                        <CardText>Click the button below a to begin!</CardText>
                        <Link to="/takequiz"><Button color="primary"> Take a Quiz</Button></Link>
                    </CardBody>
                </Card>
                {this.state.scores.map(item => <ScoreCard subject={'english'} total={'20'} marks={'12'} comments={'good!'}/>)}
                </div>
            )
        }
        else{
            return (
                <Container>
                <Row>
                    <Col lg={{size: 12}}>
                        <Badge color="danger" className="m-12 p-12" style={{margin: '50px', fontSize: '50px' ,width: '700px', height: '80px' ,textAlign: "center", alignSelf: "center"}}>
                            Not Authorized!
                        </Badge>
                    </Col>
                </Row>
                <Row>
                <Col lg={{size: 12}}>
                        <a style={{margin: '50px', fontSize: '50px' ,width: '700px', height: '80px' ,textAlign: "center", alignSelf: "center"}} href="/login">Log In</a>
                    </Col>
                </Row>
                </Container>
                )
        }
    }
}
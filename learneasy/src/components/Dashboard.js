import React, { Component } from "react";
import { Card, Button, CardHeader, CardBody,CardTitle, CardText } from 'reactstrap';
import axios from 'axios';
import ScoreCard from './ScoreCard';
import { Link } from "react-router-dom";
import Unauth from './Unauth.js'
import { Spinner } from 'reactstrap';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            waiting: true,
            authorize: false,
            username: '',
            email: '',
            rollno: '',
            scores: []
        }
    }

    componentDidMount(){
        axios.get('/student/details')
        .then(response => response.data)
        .then(details => {
            this.setState({
                waiting: false,
                authorize: true, 
                username: details.username, 
                email: details.email,
                rollno: details.rollno,
            })
            details.scores.forEach(element => {
                var subject = element.subject
                var score = element.score
                var total = element.total
                var comments = element.comments
                this.setState({scores: [...this.state.scores, {subject, score, total, comments}]})
            });
            console.log(this.state)
        }).catch(err => this.setState({waiting: false}))
    }
    render(){
        if(this.state.authorize && !this.state.waiting){
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
                {this.state.scores.map(item => <ScoreCard subject={item.subject} total={item.total} marks={item.score} comments={item.comments}/>)}
                </div>
            )
        }
        else if(!this.state.authorize && this.state.waiting){
            return (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh'}}>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="dark" />
                </div>
            )
        }
        else{
            return (
                 <Unauth />
                )
        }
    }
}
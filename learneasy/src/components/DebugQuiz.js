import React, { Component } from 'react';
import { Button} from 'reactstrap';
import axios from 'axios'
import Red from './Images/Red.png';
import Black from './Images/Black.png';
import Green from './Images/Green.png';
import Blue from './Images/Blue.png';
import Rainy from './Images/Rainy.png';
import Cow from './Images/Cow.png';
import Cat from './Images/Cat.png';
import Dog from './Images/Dog.png';
import Horse from './Images/Horse.png';

import QuizCardFigures from './QuizCardFigures';
import QuizMcq from './QuizMcq'
import { Spinner } from 'reactstrap';
import Unauth from './Unauth.js'

export class DebugQuiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            waiting: false,
            authorize: true,
            subject: "Cognitive Recall",
            score: 0,
            total: 10,
            comments: "You Have Show Immese Improvements... Keet it Up!"
        }
        this.handleScore = this.handleScore.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     axios.get('/student/details')
    //     .then(response => response.data)
    //     .then(details => {
    //         this.setState({
    //             waiting: false,
    //             authorize: true,
    //         })
    //     }).catch(err => this.setState({waiting: false}))
    // }

    handleScore(){
        this.setState({score: this.state.score + 1})
    }
    
    handleSubmit(e){
        // axios.post('/student/score', {
        //     subject: this.state.subject,
        //     score: this.state.score,
        //     total: this.state.total,
        //     comments: this.state.comments
        // }).then(window.location.replace('http://localhost:3000/dashboard'))
    }
    
    render() {
        if(this.state.authorize && !this.state.waiting){
            return (
                <div>
                    <QuizMcq questionDetails="Pick the Correct Animal" q='1' scorer={this.handleScore} answer={'option3'} question={Cow} one={'It is a Dog'} two={'It is a Lizzard'} three={'It is a Cow'} four={'It is a Mouse'}/>
                    <QuizCardFigures questionDetails="Choose The Matching Color" q='2' scorer={this.handleScore} answer={'option3'} question={Red} one={Blue} two={Green} three={Red} four={Black}/>
                    <QuizCardFigures questionDetails="Choose The Matching Animal" q='3' scorer={this.handleScore} answer={'option4'} question={Horse} one={Dog} two={Cow} three={Cat} four={Horse}/>
                    <QuizCardFigures questionDetails="Choose The Matching Color" q='4' scorer={this.handleScore} answer={'option2'} question={Green} one={Blue} two={Green} three={Red} four={Black}/>
                    <QuizCardFigures questionDetails="Choose The Matching Animal" q='5' scorer={this.handleScore} answer={'option1'} question={Dog} one={Dog} two={Cow} three={Cat} four={Horse}/>
                    <QuizMcq questionDetails="Pick the Correct Weather" q='6' scorer={this.handleScore} answer={'option1'} question={Rainy} one={'It is Rainy'} two={'It is Sunny'} three={'It is Cloudy'} four={'It is Snowing'}/>
                    <QuizCardFigures questionDetails="Choose The Matching Color" q='7' scorer={this.handleScore} answer={'option4'} question={Black} one={Blue} two={Green} three={Red} four={Black}/>
                    <QuizMcq questionDetails="Pick the Correct Weather" q='8' scorer={this.handleScore} answer={'option1'} question={Rainy} one={'It is Rainy'} two={'It is Sunny'} three={'It is Cloudy'} four={'It is Snowing'}/>
                    <QuizCardFigures questionDetails="Choose The Matching Animal" q='9' scorer={this.handleScore} answer={'option3'} question={Cat} one={Dog} two={Cow} three={Cat} four={Horse}/>
                    <QuizMcq questionDetails="Pick the Correct Weather" q='10' scorer={this.handleScore} answer={'option1'} question={Rainy} one={'It is Rainy'} two={'It is Sunny'} three={'It is Cloudy'} four={'It is Snowing'}/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "70px"}}>
                    <Button style={{width: '200px', height:'50px', marginRight: '20px'}} onClick={this.handleSubmit} color="danger">Submit Quiz</Button> 
                    <h4>You Scored: {this.state.score}/10</h4>
                    </div>
                    
                </div>
            )
        } 
        else if(!this.state.authorize && this.state.waiting){
            return(
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
        else {
            return(
                <Unauth />
            )
        }
    }
}

export default DebugQuiz;

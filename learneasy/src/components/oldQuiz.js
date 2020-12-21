import React, { Component } from 'react';
import { Button, FormGroup, Label, Input} from 'reactstrap';
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


export class TakeQuiz extends Component {
    constructor(props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);

        this.state = {
            rollno: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: ''
        }
    }

    onToggleOne = (e) =>{
        this.setState( {q1: e.target.value} )
    }

    onToggleTwo = (e) =>{
        this.setState( {q2: e.target.value} )
    }

    onToggleThree = (e) =>{
        this.setState( {q3: e.target.value} )
    }

    onToggleFour = (e) =>{
        this.setState( {q4: e.target.value} )
    }

    onToggleFive = (e) =>{
        this.setState( {q5: e.target.value} )
    }


    //When pressing submit
    onClick = (e) => {
        e.preventDefault();
        axios.post('/student/takequiz', {
            rollno: this.state.rollno,
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5
        })
        .then(response => {
            if(!response.data.error){
                console.log('Thank you for submitting the quiz!');
                console.log(response);
                //Will need to add/change the redirectlink in this case. Possibly to a new page that reirects you to the score field
                this.setState({redirectTo: '/student/dashboard'})
            }
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="container">
                <br/>
                <h1>Welcome to your quiz!</h1>
                <p>
                    You have 5 questions. Select the correct answers. You can use different learning aids to help you through the quiz.
                </p>
                <br/>
                <div className="Q1">
                    <h6>
                        Q1.) Match the same colors
                    </h6>
                    <img src= { Red } title="Red" width="200" alt='red'/>
                    <FormGroup tag="fieldset">
                    <legend>Choose:</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='1' onChange={this.onToggleOne} />{' '}
                        <img src= { Red } height="150" width="150" alt='red'/>
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='1' onChange={this.onToggleOne}/>{' '}
                        <img src= { Black } height="150" width="150" alt='black'/>
                    </Label>
                    </FormGroup>
                    </FormGroup>
                </div>
                <div>
                    <h6>
                        Q2.) What is the weather?
                    </h6>
                    <img src= { Rainy } title='Rainy scene' width="200" alt='Rainy'/>
                    <FormGroup tag="fieldset">
                    <legend>Choose:</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='2' onChange={this.onToggleTwo}/>{' '}
                        Sunny
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='2' onChange={this.onToggleTwo}/>{' '}
                        Rainy
                    </Label>
                    </FormGroup>
                    </FormGroup>
                </div>
                <div>
                    <h6>
                        Q3.) Match the color
                    </h6>
                    <img src= { Green } title="Green" width="200" alt='Green'/>
                    <FormGroup tag="fieldset">
                    <legend>Choose:</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='3' onChange={this.onToggleThree}/>{' '}
                        <img src= { Blue } height="150" width="150" alt='blue'/>
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='3'onChange={this.onToggleThree}/>{' '}
                        <img src= { Green } height="150" width="150" alt='green'/>
                    </Label>
                    </FormGroup>
                    </FormGroup>
                </div>
                <div>
                    <h6>
                        Q4.) Select the correct animal:
                    </h6>
                    <img src= { Cow } title="Cow" width="200" alt='Cow'/>
                    <FormGroup tag="fieldset">
                    <legend>Choose:</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='4'onChange={this.onToggleFour}/>{' '}
                        Cow
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='4'onChange={this.onToggleFour} />{' '}
                        Horse
                    </Label>
                    </FormGroup>
                    </FormGroup>
                </div>
                <div>
                    <h6>
                        Q5.) Select the correct animal:
                    </h6>
                    <img src= { Horse } title="Horse" width="200" alt='Horse'/>
                    <FormGroup tag="fieldset">
                    <legend>Choose:</legend>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='5' onChange={this.onToggleFive}/>{' '}
                        <img src= { Cat } width="150" alt='Cat'/>
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='5' onChange={this.onToggleFive}/>{' '}
                        <img src= { Horse } width="150" alt='Horse'/>
                    </Label>
                    </FormGroup>
                    <br/>
                    <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" id='5'onChange={this.onToggleFive}/>{' '}
                        <img src= { Dog } width="150" alt='Dog'/>
                    </Label>
                    </FormGroup>
                    </FormGroup>
                </div>
                <Button size="10em" color="primary" onClick={this.onClick}>Submit</Button>
            </div>
        )
    }
}

export default TakeQuiz;

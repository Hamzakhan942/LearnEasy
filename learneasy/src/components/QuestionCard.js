import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, Row} from 'reactstrap';
import { Card, CardTitle, CardText, Container, Col } from 'reactstrap';
import Red from './Images/Red.png';
import './styles/quizStyle.css';
import axios from 'axios';


export class QuizCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'correct': 'option1',
            'option1': false,
            'option2': false,
            'option3': false,
            'option4': false,
            'option5': false,
            score: 10,
            subject: "Math"
        }
        this.onChoiceSelection = this.onChoiceSelection.bind(this)
    }

    onChoiceSelection(e){
        this.setState({[e.target.name]: true})
        if(this.state[this.state.correct]){
            this.setState({score: 1})
        }
        // console.log("Sending to db");
        // axios.post('/student/score', {score: this.state.score, subject: this.state.subject})
        // .then(response => {
        //     if(!response.data.error){
        //         console.log('Succesful Scoring ');
        //         console.log(response);
        //     } else {
        //         console.log('Scoring error: '+response.data.error);
        //     }
        // }).catch(err => { 
        //     console.log('Server Error: ' + err);
        //     this.setState({redirectTo: '/signup'})
        // })
    }

    

    // <div className="container">
    //             <button type="radio" name='option2' onClick={this.onChoiceSelection}> Click</button>
    //         </div>
    
    render() {
        console.log(this.state)
        return (
            <Container>
            <Row>
                <Card body outline color="info" style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question {this.props.q}:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 2:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 3:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 4:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 5:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 6:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>

            <Row>
                <Card  style={{textAlign:"center", marginTop: '50px'}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question 7:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={Red} width="80%" height="50px"/>
                </Col>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <h3>Option 1</h3>
                        <button id="blue" name='option1' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 2</h3>
                        <button id="green" name='option2' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <h3>Option 3</h3>
                        <button id="black" name='option3' onClick={this.onChoiceSelection}></button>
                        </Col>
                        <Col>
                        <h3>Option 4</h3>
                        <button id="red" name='option4' onClick={this.onChoiceSelection}></button>
                        </Col>
                    </Row>
                </Col>
                </Card>
            </Row>
            </Container>
        )
    }
}

export default QuizCard;

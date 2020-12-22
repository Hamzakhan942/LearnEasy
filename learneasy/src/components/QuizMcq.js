import React, { Component } from 'react';
import { Button, Row} from 'reactstrap';
import { Card, Container, Col } from 'reactstrap';
import './styles/quizStyle.css';

export class QuizMcq extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'correct': this.props.answer,
            'option1': false,
            'option2': false,
            'option3': false,
            'option4': false,
            score: 0
        }
        this.onChoiceSelection = this.onChoiceSelection.bind(this)
    }

    onChoiceSelection(e){
        this.setState({[e.target.name]: true}, () => {
            if(this.state[this.state.correct]){
                this.setState({[e.target.name]: false, score: 1})
                this.props.scorer()
            }
            else{
                this.setState({[e.target.name]: false, score: 0})
            }
        })
    }
    
    render() {
        return (
            <Container>
            <Row>
                <Card body outline color="info" style={{textAlign:"center", marginTop: '50px', minWidth: "100%"}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question {this.props.q}:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={this.props.question} alt={"Question"} width="200px" height="150px"/>
                </Col>
                <h1>Pick One {this.state.score}</h1>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <Button type="radio" name='option1' onClick={this.onChoiceSelection}>
                        <h1>{this.props.one}</h1>
                        </Button>
                        </Col>
                        <Col>
                        <Button type="radio" name='option2' onClick={this.onChoiceSelection}>
                        <h1>{this.props.two}</h1>
                        </Button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <Button type="radio" name='option3' onClick={this.onChoiceSelection}>
                        <h1>{this.props.three}</h1>
                        </Button>
                        </Col>
                        <Col>
                        <Button type="radio" name='option4' onClick={this.onChoiceSelection}>
                        <h1>{this.props.four}</h1>
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

export default QuizMcq;

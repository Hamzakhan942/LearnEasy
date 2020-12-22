import React, { Component } from 'react';
import { Button, Row} from 'reactstrap';
import { Card, Container, Col } from 'reactstrap';
import './styles/quizStyle.css';


export class QuizCardFigures extends Component {
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
        console.log("lets see " + this.state[this.state.correct])
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
        console.log(this.state)
        return (
            <Container>
            <Row>
                <Card body outline color="info" style={{textAlign:"center", marginTop: '50px', minWidth: "100%"}}>
                <Col lg={{size: 12}} className="mb-5">
                    <div style={{textAlign:"center"}}>
                        <h1>Question {this.props.q}:</h1>
                        <h2>{this.props.questionDetails}</h2>
                    </div>
                    <img src={this.props.question} alt={"question"} width="200px" height="150px"/>
                </Col>
                <h1>Pick One {this.state.score}</h1>
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <Button type="submit" className="p-12 m-12" color='white' name='option1' onClick={this.onChoiceSelection}>
                        <img src={this.props.one} alt={"Option 1"} width="80px" height="80px"/>
                        </Button>
                        </Col>
                        <Col>
                        <Button type="radio" className="p-12 m-12" color='white' name='option2' onClick={this.onChoiceSelection}>
                        <img src={this.props.two} alt={"Option 2"} width="80px" height="80px"/>
                        </Button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <Button type="radio" className="p-12 m-12" color='white' name='option3' onClick={this.onChoiceSelection}>
                        <img src={this.props.three} alt={"Option 3"} width="80px" height="80px"/>
                        </Button>
                        </Col>
                        <Col>
                        <Button type="radio" className="p-12 m-12" color='white' name='option4' onClick={this.onChoiceSelection}>
                        <img src={this.props.four} alt={"Option 4"} width="80px" height="80px"/>
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

export default QuizCardFigures;

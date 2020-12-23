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
            score: 0,
            picked: false,
            corr: false,
            incorr: false
        }
        this.onChoiceSelection = this.onChoiceSelection.bind(this)
    }

    onChoiceSelection(e){
        if(!this.state.picked || !this.state.score){
            this.setState({[e.target.name]: true}, () => {
                if(this.state[this.state.correct]){
                    this.setState({[e.target.name]: false, score: 1, picked: true, corr: true, incorr: false})
                    this.props.scorer()
                }
                else{
                    this.setState({[e.target.name]: false, score: 0, picked: true, incorr: true, corr: false})
                }
            })
        }
        this.setState({[e.target.name]: true}, () => {
            if(this.state[this.state.correct]){
                this.setState({[e.target.name]: false, picked: true, corr: true, incorr: false})
            }
            else{
                this.setState({[e.target.name]: false, picked: true, incorr: true, corr: false})
            }
        })
        return false
    }
    
    render() {
        let indicator = <h1>Pick One: </h1>;
        if(this.state.picked && this.state.corr){
            indicator = <h1 style={{color: 'green'}}><span>&#10003;</span> Good Work </h1>
        } else if(this.state.picked && this.state.incorr){
            indicator = <h1 style={{color: 'red',}}><span>&#10539;</span> Oops... Try again </h1>
        }
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
                {indicator}
                <Col>
                    <Row>
                        <Col className="mx-2">
                        <Button className="p-3" style={{fontSize: '18px'}} type="radio" name='option1' onClick={this.onChoiceSelection}>
                        {this.props.one}
                        </Button>
                        </Col>
                        <Col>
                        <Button className="p-3" style={{fontSize: '18px'}} type="radio" name='option2' onClick={this.onChoiceSelection}>
                        {this.props.two}
                        </Button>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="mx-2">
                        <Button className="p-3" style={{fontSize: '18px'}} type="radio" name='option3' onClick={this.onChoiceSelection}>
                        {this.props.three}
                        </Button>
                        </Col>
                        <Col>
                        <Button className="p-3" style={{fontSize: '18px'}} type="radio" name='option4' onClick={this.onChoiceSelection}>
                        {this.props.four}
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

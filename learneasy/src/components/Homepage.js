import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import SignUp from './SignUp';
import NewLogin from './NewLogin';
import AboutUs from './AboutUs'
import Banner from '../static/banner5.png'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            account: false
        }
    }
    render(){
        let formLook;
        let directionButton;
        if(this.state.account){
            formLook = <NewLogin />
            directionButton = <Button style={{marginLeft: '50px'}} onClick={() => this.setState({account: false})}>Sign Up Now</Button>
        } else {
            formLook = <SignUp />
            directionButton = <Button style={{marginLeft: '50px'}} onClick={() => this.setState({account: true})}>Already Have an Account?</Button>
        }
        return(
            <div style={{margin:0, padding: 0}}>
                <Container fluid>
                    <Row style={{minWidth: '100%', minHeight: '100vh'}}>
                        <Col lg={{size: 8, order: 1}} md={{size: 6, order: 1}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} className="p-0">
                            <Jumbotron style={{background: 'white'}} className="pt-4">
                                <h1 className="display-3">Learn Easy!</h1>
                                <p className="lead">Building a swift learning environment</p>
                                <hr className="my-2" />
                                <p>As per the latest statistics available by the National Institute of Health, over 8% of the general population has some kind of learning disability. Learning disabilities can range across a spectrum depending on the severity of the case but can be broadly defined as the difficulty in understanding and comprehending information as well as the inability to communicate it

                                With such a large number of people suffering with learning disabilities, it is integral to put forth solutions to their daily problems for the purpose of educating them effectively.
                                
                                This project suggests a system that works as a pedagogical or learning aid for those with learning disabilities by providing to them an environment that enables ease of understanding and communication</p>
                            </Jumbotron>
                            {directionButton}
                        </Col>
                        <hr />
                        <Col lg={{size: 4, order: 2}} md={{size: 6, order: 2}} sm={{size: 12, order: 2}} xs={{size: 12, order: 2}}>
                            {formLook}
                        </Col>
                    </Row>
                    <br />
                    <Row style={{minWidth: '100%', minHeight: '100vh', background: 'gray'}}>
                        <Col lg={{size: 7, order: 1}} md={{size: 12, order: 1}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} className="px-5">
                            <h1>Why We Need Learn Easy</h1>
                            <hr/>
                            <p>As per the latest statistics available by the National Institute of Health, over 8% of the general population has some kind of learning disability. Learning disabilities can range across a spectrum depending on the severity of the case but can be broadly defined as the difficulty in understanding and comprehending information as well as the inability to communicate it

                            With such a large number of people suffering with learning disabilities, it is integral to put forth solutions to their daily problems for the purpose of educating them effectively.
                            
                            This project suggests a system that works as a pedagogical or learning aid for those with learning disabilities by providing to them an environment that enables ease of understanding and communication
                            </p>
                        </Col>
                        <Col style={{overflow: "hidden"}} lg={{size: 5, order: 1}} md={{size: 12, order: 1}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} className="px-5">
                            <h1>Students Have Individual Needs</h1>
                            <hr/>
                            <p>As per the latest statistics available by the National Institute of Health, over 8% of the general population has some kind of learning disability. Learning disabilities can range across a spectrum depending on the severity of the case but can be broadly defined as the difficulty in understanding and comprehending information as well as the inability to communicate it

                            This project suggests a system that works as a pedagogical or learning aid for those with learning disabilities by providing to them an environment that enables ease of understanding and communication
                            </p>
                            <img src={Banner} width="300px" height="250px" style={{marginRight: '10px'}}/>
                        </Col>
                    </Row>
                    <Row style={{minWidth: '100%', minHeight: '100vh', background: 'coral'}}>
                        <Col>
                            <h1>Meet The Team</h1>
                            <hr/>
                            <p>
                            About the team
                            </p>
                            <div style={{display:"flex" ,alignItems: 'center', justifyContent: "center"}}>
                                <img src={Banner} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                                <img src={Banner} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                                <img src={Banner} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
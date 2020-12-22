import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import SignUp from './SignUp';
import NewLogin from './NewLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hamza from '../static/Hamza.jpg'
import Haya from '../static/Haya.jpg'
import Hassan from '../static/Hassan.jpg'
import Student from '../static/student.jpg'


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
            directionButton = <Button color="primary" style={{marginLeft: '50px', marginBottom: '20px'}} onClick={() => this.setState({account: false})}>Sign Up Now</Button>
        } else {
            formLook = <SignUp />
            directionButton = <Button color="primary" style={{marginLeft: '50px', marginBottom: '20px'}} onClick={() => this.setState({account: true})}>Already Have an Account?</Button>
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
                    
                    <Row style={{minWidth: '100%', minHeight: '100vh', background: '#4c75a3', marginTop: '0px'}}>
                        <Col lg={{size: 7, order: 1}} md={{size: 12, order: 1}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} className="px-5">
                            <h1 style={{marginTop: '20px', color:"white"}}>Why We Need Learn Easy</h1>
                            <hr />
                            <p style={{marginTop: '20px', color:"wheat", fontSize: '18px'}}>As per the latest statistics available by the National Institute of Health, over 8% of the general population has some kind of learning disability. Learning disabilities can range across a spectrum depending on the severity of the case but can be broadly defined as the difficulty in understanding and comprehending information as well as the inability to communicate it

                            With such a large number of people suffering with learning disabilities, it is integral to put forth solutions to their daily problems for the purpose of educating them effectively.
                            
                            This project suggests a system that works as a pedagogical or learning aid for those with learning disabilities by providing to them an environment that enables ease of understanding and communication
                            
                            It can be tough to face the possibility that your child has a learning disorder.
                            No parent wants to see their child suffer. You may wonder what it could mean

                            for your child’s future, or worry about how they will make it through school.
                            Perhaps you’re concerned that by calling attention to your child’s learning
                            problems they might be labeled “slow” or assigned to a less challenging class.
                            But the important thing to remember is that most kids with learning disabilities
                            are just as smart as everyone else. They just need to be taught in ways that
                            are tailored to their unique learning styles. By learning more about learning
                            disabilities in general, and your child’s learning difficulties in particular, you
                            can help pave the way for success at school and beyond.
                             
                            <br />
                            This project suggests a system that works as a pedagogical or learning aid for those with learning disabilities by providing to them an environment that enables ease of understanding and communication
                            
                            It can be tough to face the possibility that your child has a learning disorder.
                            No parent wants to see their child suffer. You may wonder what it could mean

                            for your child’s future, or worry about how they will make it through school.
                            Perhaps you’re concerned that by calling attention to your child’s learning
                            problems they might be labeled “slow” or assigned to a less challenging class.
                            But the important thing to remember is that most kids with learning disabilities
                            are just as smart as everyone else.
                            
                            </p>
                        </Col>
                        <Col style={{overflow: "hidden"}} lg={{size: 5, order: 1}} md={{size: 12, order: 1}} sm={{size: 12, order: 1}} xs={{size: 12, order: 1}} className="px-5">
                            <h1 style={{marginTop: '20px', color:"white"}}>Students Have Individual Needs</h1>
                            <hr/>
                            <p style={{marginTop: '20px', color:"wheat", fontSize: '18px'}}>
                            Our system exploits the understanding of learning disabilities and the
                            conclusion that people with learning disabilities have trouble remembering and
                            recalling concepts. Moreover, they do not comprehend words and numbers
                            when written in the form of text.
                            Therefore, our system uses images, metaphors, hints, and style icons for the
                            ease of understanding and comprehensiveness.
                            An adaptable layout makes this system accessible over all ranges of devices.
                            </p>
                            <img src={Student} alt={"Student needs"} width="300px" height="250px" style={{marginRight: '10px', marginBottom: '20px', borderRadius:'20%'}}/>
                        </Col>
                    </Row>
                    <Row style={{minWidth: '100%', minHeight: '100vh', background: '#131418'}}>
                        <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <h1 style={{marginTop: '20px', color: 'white'}}>Meet The Team</h1>
                            <hr/>
                            <p style={{color: 'white', textAlign: 'center'}}>
                            Aware of the problems of people with learning disabilities, <br/>our team consists of
                            motivated individuals aiming to use technology and HCI concepts for the
                            purpose of solving learning problems.
                            </p>
                            <br />
                            
                            <Container>
                                <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <Col lg={{size: 12}} md={{size: 12}} style={{color: 'white', textAlign: 'left'}}>
                                <img src={Hamza} alt={"Hamza"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                                <h5 style={{color: 'white', textAlign: 'center'}}>Hamza Khan</h5>
                                <p>A grounded and solution oriented computer scientist with a wide variety of
                                practical work in several domains. Adept at motivating self and others, he
                                often takes charge in leading the team to achieve milestones even in tight
                                timeframes. Hamza is passionate towards data science and hopes to execute
                                data-driven solutions to increase efficiency, accuracy and utility of
                                processings. People might call him a narcissist but the privilege to call himself
                                better amongst many has been hard earned.</p>
                                </Col>
                                <Col lg={{size: 12}} md={{size: 12}} style={{color: 'white', textAlign: 'left'}}>
                                <img src={Haya} alt={"Haya"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                                <h5 style={{color: 'white', textAlign: 'center'}}>Haya N. Rizwan</h5>
                                <p>A computer science student who does not even know what she is doing in this
                                department anymore. While she thinks that she can do well, her habit of
                                leaving things to the last minute are really making that hard to implement.
                                Hoping that she pulls her socks now that graduation is nearing.<br/> Amen.</p>
                                </Col>
                                <Col lg={{size: 12}} md={{size: 12}} style={{color: 'white', textAlign: 'left'}}>
                                <img src={Hassan} alt={"Hassan"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
                                <h5 style={{color: 'white', textAlign: 'center'}}>Hassan Shakeel</h5>
                                <p>Inquisitive and energetic computer science specialist skilled in backend
                                development with a strong foundation in mathematical concepts, programming
                                logic building, problem solving and cross platform coding. While
                                procrastination takes up most of his time, Hassan can perform meticulously at
                                the eleventh hour and deliver impressive results.</p>
                                </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

// <div style={{display:"flex" ,alignItems: 'center', justifyContent: "center"}}>
//                                 <img src={Banner} alt={"Hamza"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
//                                 <img src={Banner} alt={"Haya"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
//                                 <img src={Banner} alt={"Hassan"} width="150" height="150" style={{margin: '20px', borderRadius:'100%'}}/>
//                             </div>
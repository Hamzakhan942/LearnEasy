import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ModalExample from "./LogOut"


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        }
    }
    toggle = (e) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }))
    }
    render(){
        return(
            <div>
            <Navbar sticky="top" bg="dark" variant="dark">
                <Navbar.Brand href="/student/aboutus">Learn Easy</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/student/aboutus">About Us</Nav.Link>
                    <Nav.Link href="/student/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/student/login">Log In</Nav.Link>
                    <Nav.Link href="/student/takequiz">Take a Quiz</Nav.Link>
                    <Nav.Link href="/student/contactus">Contact Us</Nav.Link>
                    <Button onClick={this.toggle} size="10em">Logout</Button>
                {this.state.modal ? <ModalExample buttonLabel={"yes"} toggle={this.toggle} modal={this.state.modal}/> : ""}
       
                </Nav>
        </Navbar>
        </div>
        )
    }
}
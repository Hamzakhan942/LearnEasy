import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ModalExample from "./LogOut"
import logo from '../static/logo-4.png'


export default class NavTopbar extends Component {
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
            <Navbar sticky="top" bg="secondary" variant="dark" className="ma-auto">
                <Navbar.Brand className="ml-2 mr-5" href="/"><img src={logo} alt="Logo" width="60" height="60"/></Navbar.Brand>
                <Nav className="ma-auto">
                    <Nav.Link className="mx-4" href="/aboutus">About Us</Nav.Link>
                    <Nav.Link className="mx-4" href="/signup">Sign Up</Nav.Link>
                    <Nav.Link className="mx-4" href="/login">Log In</Nav.Link>
                    <Nav.Link className="mx-4" href="/takequiz">Take a Quiz</Nav.Link>
                    <Nav.Link className="mx-4" href="/contactus">Contact Us</Nav.Link>
                    <Button onClick={this.toggle} size="10em">Logout</Button>
                {this.state.modal ? <ModalExample buttonLabel={"yes"} toggle={this.toggle} modal={this.state.modal}/> : ""}
       
                </Nav>
        </Navbar>
        </div>
        )
    }
}
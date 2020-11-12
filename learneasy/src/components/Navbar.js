import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




export default class Login extends Component {
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Learn Easy</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#quiz">Take a Quiz</Nav.Link>
                    <Nav.Link href="#contacts">Contact Us</Nav.Link>
                    <Nav.Link href="#login">Log In</Nav.Link>
                </Nav>
        </Navbar>
        )
    }
}
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRollno = this.onChangeRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            email:'',
            rollno:'',
            password:'',
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onChangeRollno(e) {
        this.setState({
            rollno: e.target.value,
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.email + ' ' + this.state.password);
        axios.post('/student/signup',  { 
            username: this.state.username,
            email: this.state.email,
            rollno: this.state.rollno,
            password: this.state.password
        })
        .then(response => {
            if(!response.data.error){
                console.log('Succesful SignUp ');
                console.log(response);
                this.setState({redirectTo: '/login'})
            } else {
                console.log('Sign Up error: '+response.data.error);
                this.setState({redirectTo: '/signup'})
            }
        }).catch(err => { 
            console.log('Server Error: ' + err);
            this.setState({redirectTo: '/signup'})
        })
    }
    render(){
        return(
            <div className="container">
                <br/>
                <h1>Sign Up Form</h1>
            <Form className="mt-4" onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicUsername" >
                    <Form.Label>User Name</Form.Label>
                    <FormControl placeholder="Username" type="username" onChange={this.onChangeUsername} required></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <FormControl placeholder="name@nu.edu.pk" type="email" onChange={this.onChangeEmail} required></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicRollno" >
                    <Form.Label>Roll no.</Form.Label>
                    <FormControl placeholder="Eg: 17K-1234" type="rollno" onChange={this.onChangeRollno} required></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl placeholder="At least 8 characters and not more than 20" type="password" onChange={this.onChangePassword} min="8" max="15" required></FormControl>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </small>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Sign Up
                </Button>
                <Link className="mx-4"to='/student/login'>Log In</Link>
            </Form> 
            </div>
        )
    }
}
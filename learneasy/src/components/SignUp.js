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
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:'',
            email: "",
            password: "",
            // redirectTo: null
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
    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state.email + ' ' + this.state.password);
        axios.post('/signup/',  { 
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            if(response.data){
                console.log('Succesful SignUp');
                this.setState({redirectTo: '/login'})
            } else {
                console.log('Sign Up error');
                this.setState({redirectTo: '/signup'})
            }
        }).catch(err => { 
            console.log('Server Error: ' + err);
            this.setState({redirectTo: '/signup'})
        })
    }
    render(){
        // if(this.state.redirectTo){
        //     return( 
        //     <Redirect to ={{pathname: this.state.redirectTo}} />
        //     )
        // }
        return(
            <div className="container">
            <Form className="mt-4" onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicUsername" >
                    <Form.Label>User Name</Form.Label>
                    <FormControl placeholder="Username" type="username" onChange={this.onChangeUsername} ></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <FormControl placeholder="Email" type="email" onChange={this.onChangeEmail} ></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl placeholder="Password" type="password" onChange={this.onChangePassword}></FormControl>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Sign Up
                </Button>
                <Link className="mx-4"to='/login'>Log In</Link>
            </Form> 
            </div>
        )
    }
}
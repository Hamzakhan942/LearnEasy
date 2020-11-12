import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: "",
            password: "",
            signedIn: false
        }
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
        console.log('In login ' + this.state.email + ' ' + this.state.password);
        axios.post('/student/login', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        .then(response => {
            if(!response.data.error){
                console.log('Succesful Login In ');
                console.log(response);
                // this.setState({redirectTo: '/login'})
            } else {
                console.log('Log In error: '+response.data.error);
                // this.setState({redirectTo: '/signup'})
            }
        })
    }
    render(){
        // if(this.state.signedIn){
        //     return( 
        //     <Redirect
        //     to={{
        //         pathname: '/dashboard',
        //         state: {key: this.state.email,
        //         approved: true}
        //         }}
        //     />
        //     )
        // }
        return(
            <div className="container">
            <Form className="mt-4" onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <FormControl placeholder="Email" type="email" onChange={this.onChangeEmail} ></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl placeholder="Password" type="password" onChange={this.onChangePassword}></FormControl>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Login
                </Button>
                <Link className="mx-4"to='/signup'>Sign Up</Link>
            </Form> 
            </div>
        )
    }
}
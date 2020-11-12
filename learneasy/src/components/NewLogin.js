import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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

        // if(this.state.password === '123'){
        //     console.log(this.state.email);
        //     console.log(this.state.signedIn)
        //     this.setState({ signedIn: true})
        // }
        console.log(this.state.email + ' ' + this.state.password);
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
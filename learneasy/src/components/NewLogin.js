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
        
        this.onChangeRollno = this.onChangeRollno.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rollno:'',
            password: "",
            redirectTo: null
        }
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
        axios.post('/student/login', {
            rollno: this.state.rollno,
            password: this.state.password
        })
        .then(response => {
            if(!response.data.error){
                console.log('Succesful Login In ');
                console.log(response);
                this.setState({redirectTo: '/dashboard'})
            } else {
                console.log('Log In error: '+response.data.error);
                // this.setState({redirectTo: '/signup'})
            }
        })
    }
    render(){
        if(this.state.redirectTo){
            return( 
            <Redirect
            to={{
                pathname: this.state.redirectTo,
                // state: {key: this.state.email,
                // approved: true}
                }}
            />
            )
        }
        return(
            <div className="container">
                <br/>
                <h1>Login</h1>
                <hr />
            <Form className="mt-4" onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicRollno" >
                    <Form.Label>Roll No</Form.Label>
                    <FormControl placeholder="17K-1234" type="rollno" onChange={this.onChangeRollno} required></FormControl>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <FormControl placeholder="Password" type="password" onChange={this.onChangePassword} min="8" max="15"  required></FormControl>
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
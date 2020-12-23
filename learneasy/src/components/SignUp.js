import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Spinner } from 'reactstrap';
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
            isWaiting: false
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
        this.setState({isWaiting: true})
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
                this.setState({isWaiting: false})
                window.location.replace("/login")
            } else {
                console.log('Sign Up error: '+response.data.error);
                alert("User with this rollno. Already Exists!")
                this.setState({isWaiting: false, username: '', email: '', password: '', rollno: ''})
            }
        }).catch(err => { 
            console.log('Server Error: ' + err);
            alert("OOPS... Something went wrong :(")
            this.setState({isWaiting: false, username: '', email: '', password: '', rollno: ''})
        })
    }
    render(){
        if(!this.state.isWaiting){
            return(
                <div className="container">
                    <br/>
                    <h1>Sign Up</h1>
                    <hr />
                <Form className="mt-4" onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicUsername" >
                        <Form.Label>User Name</Form.Label>
                        <FormControl placeholder="Username" value={this.state.username} type="username" onChange={this.onChangeUsername} required></FormControl>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <FormControl placeholder="name@nu.edu.pk" value={this.state.email} type="email" onChange={this.onChangeEmail} required></FormControl>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicRollno" >
                        <Form.Label>Roll no.</Form.Label>
                        <FormControl placeholder="Eg: 17K-1234" value={this.state.rollno} type="rollno" onChange={this.onChangeRollno} required></FormControl>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl placeholder="At least 8 characters and not more than 20" value={this.state.password} type="password" onChange={this.onChangePassword} min="8" max="15" required></FormControl>
                        <small id="passwordHelpBlock" className="form-text text-muted">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </small>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Sign Up
                    </Button>
                    <Link className="mx-4"to='/login'>Log In</Link>
                </Form> 
                </div>
            )
        } else{
            return(
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh'}}>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="dark" />
                </div>
            )
        }
    }
}
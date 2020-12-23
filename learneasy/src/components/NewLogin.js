import React, { Component } from "react";
import { Spinner } from 'reactstrap';
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
            isWaiting: false,
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
        this.setState({isWaiting: true})
        e.preventDefault();
        axios.post('/student/login', {
            rollno: this.state.rollno,
            password: this.state.password
        })
        .then(response => {
            window.location.replace("/dashboard")
        })
        .catch(err => {
            this.setState({isWaiting: false, rollno: '', password: ""})
            alert("Incorrect Username or Password")}
            )
    }
    render(){
        if(!this.state.isWaiting){
            return(
                <div className="container">
                    <br/>
                    <h1>Login</h1>
                    <hr />
                <Form className="mt-4" onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicRollno" >
                        <Form.Label>Roll No</Form.Label>
                        <FormControl placeholder="17K-1234" type="rollno" value={this.state.rollno} onChange={this.onChangeRollno} required></FormControl>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl placeholder="Password" type="password" value={this.state.password} onChange={this.onChangePassword} min="8" max="15"  required></FormControl>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
                    <Link className="mx-4"to='/signup'>Sign Up</Link>
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
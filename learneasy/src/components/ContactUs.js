import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name:'',
            email: "",
            subject: '',
            text:'',
            redirectTo: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value,
        })
    }

    onChangeText(e) {
        this.setState({
            text: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post('/student/login', {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            text: this.state.text
        })
        .then(response => {
            if(!response.data.error){
                console.log('Message sent successfully!');
                console.log(response);
                this.setState({redirectTo: '/student/aboutus'})
            } else {
                console.log('Log In error: '+response.data.error);
                // this.setState({redirectTo: '/signup'})
            }
        })
    }
    render(){
        return(
            <div className="container">
                <br/>
                <h1>Contact Us Form</h1>
                <br/>
                <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="text" id="Name" placeholder="Please enter your fullname" onChange={this.onChangeName} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email Address</Label>
                    <Input type="email" name="email" id="Email" placeholder="Enter your email address" onChange={this.onChangeEmail}required/>
                </FormGroup>
                <FormGroup>
                    <Label for="Subject">Subject</Label>
                    <Input type="text" id="Subject" onChange={this.onChangeSubject} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Please enter details here</Label>
                    <Input type="textarea" name="text" id="exampleText" onChange={this.onChangeText} required/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    If you wish to attach any document, please use this
                    </FormText>
                </FormGroup>
                <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

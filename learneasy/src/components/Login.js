import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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

        if(this.state.password === '123'){
            console.log(this.state.email);
            console.log(this.state.signedIn)
            this.setState({ signedIn: true})
        }
    }
    render(){
        if(this.state.signedIn){
            return( 
            <Redirect
            to={{
                pathname: '/dashboard',
                state: {key: this.state.email,
                approved: true}
                }}
            />
            )
        }
        return(
            <form className="Form" onSubmit={this.onSubmit}>
            <input 
                placeholder="email"
                onChange = {this.onChangeEmail}
            />
            <br/>
            <input 
                placeholder="password"
                onChange = {this.onChangePassword}
            />
            <br/>
            <button
                type="submit"
            >Sign In</button>
            </form>
            )
    }
}
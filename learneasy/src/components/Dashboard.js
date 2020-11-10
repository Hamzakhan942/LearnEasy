import React, { Component } from "react";

export default class Login extends Component {
    render(){
        // if(!this.props.auth){
        //     return(
        //         <h1>Not Authorizd! {String(this.props.auth)} </h1>
        //     )
        // }else{
        //     return(
        //         <h1>Authorizd</h1>
        //     )
        // }
        return(
            <h1>Dashboard of {this.props.location.state.key}</h1>
        )
    }
}
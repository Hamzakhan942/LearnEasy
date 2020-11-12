import React, { Component } from "react";

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: '',
            userAllowed: false
        }
    }

    componentWillMount(){
        const permission = () => {
            return new Promise((resolve, reject) => {
                if(this.props.location.state.approved){
                    resolve(true);
                }else {
                    reject(false);
                }
            })
        }

        permission()
        .then(res => {this.setState({userAllowed: res, user: this.props.location.state.key})})
        .catch(err => {this.setState({userAllowed: false, user: ''})});
    }

    render(){
        if(this.state.userAllowed){
            return(
                <h1>Dashboard of {this.state.user}</h1>
            )
        }
        return(
            <h1>Login First</h1>
        )
        
    }
}
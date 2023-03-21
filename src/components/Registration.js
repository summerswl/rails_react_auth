import React, { Component } from 'react'
import LoginAuth from './auth/LoginAuth';
import RegistrationAuth from "./auth/RegistrationAuth"

export default class Registration extends Component {
  constructor(props) {
    super(props);
  }  

  handleSuccessfulAuth = (data) => {
    //TODO update parent component
    this.props.handleLogin(data);
    //redirecting user(Using Route component from 'react-router-dom' in app.js)
    this.props.history.push("/dashboard");
  }

  handleLogout = () => {
    this.props.handleLogout(); 
  }

  render() {
    return (
      <div>
        <h1>Registration</h1>       
        <RegistrationAuth handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  };
};
import React, { Component } from 'react'
import LoginAuth from './auth/LoginAuth';
import RegistrationAuth from "./auth/RegistrationAuth"

export default class Registration extends Component {
  constructor(props) {
    super(props);
  }  

  handleSuccessfulAuth = (data) => {
    const { handleLogin, history } = this.props;
    handleLogin(data);
    // Redirecting user (Using Route component from 'react-router-dom' in app.js)
    history.push("/dashboard");
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
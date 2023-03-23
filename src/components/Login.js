import React, { Component } from 'react'
import LoginAuth from './auth/LoginAuth';
import Registration from "./auth/RegistrationAuth"

export default class Login extends Component {
  constructor(props) {
    super(props);
  }  

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
    // this.props.handleLogout(data); 
    this.props.history.push("/dashboard");
  }

  // handleLogout = () => {
  //   this.props.handleLogout(); 
  // }

  render() {
    return (
      <div>
        <h1>Login</h1>
        {/* <button onClick={() => this.handleLogout()}>Logout</button> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        <LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  };
};
import React, { Component } from 'react'
import LoginAuth from './auth/LoginAuth';
import Registration from "./auth/Registration"

export default class Home extends Component {
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
        <h1>Login</h1>
        {/* <button onClick={() => this.handleLogout()}>Logout</button> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/> */}
        <LoginAuth handleSuccessfulAuth={this.handleSuccessfulAuth}/>
      </div>
    )
  };
};
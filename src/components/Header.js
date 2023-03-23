import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }  

handleHome = () => {
  this.props.history.push("/home");
}

handleLogin = () => {
  this.props.history.push("/login");
}

handleRegistration = () => {
  this.props.history.push("/registration");
}

handleDashboard = () => {
  this.props.history.push("/dashboard");
}

handleLogout = () => {
  this.props.handleLogout();
  this.props.history.push("/"); 
}

showLoginLogout = () => {
  if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
    return <button onClick={this.handleLogin}>Login</button>;
  } else {
    return <button onClick={this.handleLogout}>Logout</button>;
  }
}

showRegistration = () => {
  if (this.props.loggedInStatus === "NOT_LOGGED_IN") {
    return <button onClick={this.handleRegistration}>Create Account</button>;
  } else {
    '';
  }
}

  render() {
    return (
      <div>
        <div className='header'>
          <button onClick={this.handleHome}>Home</button>
          {this.showLoginLogout()}
          {this.showRegistration()}
          <h1>Header</h1>
          <h2>Status: {this.props.loggedInStatus}</h2>          
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
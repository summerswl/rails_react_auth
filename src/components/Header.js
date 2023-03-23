import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);
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

showLogout = () => {
  if (this.props.loggedInStatus === "LOGGED_IN") {
    return <button onClick={this.handleLogout}>Logout</button>;
  } else {
    ''
  }
}

  render() {
    return (
      <div>
        <div className='header'>
          <h1>Header</h1>
          <h2>Status: {this.props.loggedInStatus}</h2>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegistration}>Create Account</button>
          {this.showLogout()}
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
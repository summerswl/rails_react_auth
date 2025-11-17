import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './Login.scss'
import './Header.scss'

class Home extends Component {
  constructor(props) {
    super(props);
  }

// handleHome = () => {
//   this.props.history.push("/home");
// }

handleLogin = () => {
  this.props.history.push('/login');
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
  if (this.props.loggedInStatus === "not logged in") {
    return <button onClick={this.handleLogin}>Login</button>;
  } else {
    return <button onClick={this.handleLogout}>Logout</button>;
  }
}

showRegistration = () => {
  if (this.props.loggedInStatus === "not logged in") {
    return <button onClick={this.handleRegistration}>Create Account</button>;
  } else {
    '';
  }
}


  render() {
    return (
      <div>
        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Welcome, please login or create an account
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {/* <button onClick={this.handleHome}>Home</button> */}
            {this.showLoginLogout()}
            {this.showRegistration()}            
          </div> 
          <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            Status: You are {this.props.loggedInStatus}
          </h2>           
        </div>
      </div>
    );
  }
};

export default withRouter(Home);
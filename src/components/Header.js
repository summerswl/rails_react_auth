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

handleDashboard = () => {
  this.props.history.push("/dashboard");
}

handleLogout = () => {
  this.props.handleLogout();
  this.props.history.push("/home"); 
}

  render() {
    return (
      <div>
        <div className='header'>
          <h1>Header</h1>
          <h1>Status: {this.props.loggedInStatus}</h1>
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleDashboard}>Dashboard</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
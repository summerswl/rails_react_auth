import React, { Component } from 'react'
import { withRouter } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
  }  

handleClickHome = () => {
  this.props.history.push("/home");
}

handleClickDashboard = () => {
  this.props.history.push("/dashboard");
}

handleLogout = () => {
  this.props.handleLogout(); 
}

  render() {
    return (
      <div>
        <div>
          <h1>Header</h1>
          <button onClick={this.handleClickHome}>Login</button>
          <button onClick={this.handleClickDashboard}>Dashboard</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    );
  }
};

export default withRouter(Header);
import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (      
      <div style={{ fontSize: '36px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>          
        <h1>Retrieve Forecast Data for a Given Address</h1>                          
      </div>
    );
  }
};
import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import './NavBanner.css';
import logo from '../../assets/images/web-title.png';

class NavBanner extends Component {
  render() {
    return (
      <div className="NavBanner">
        <img src={logo} alt="Fling.App"/>
        <Avatar />
      </div>
    )
  }
}

export default NavBanner;

import React from 'react';
import Logo from '../assets/images/traveloka_pic.png';
import './header.css';

function header() {
  return (
    <div>
        <div id="header">
            <div id="left"> </div>
            <div id="sub-header">
                <img src={Logo} alt="" width="150px"/>
            </div>
        </div>
    </div>
  )
}

export default header
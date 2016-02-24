import React from 'react';

export default class Header extends React.Component {
  render() {
    return   <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">I Kan Band</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Boards</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </div>
  </nav>
  }
}

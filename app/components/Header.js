import React from 'react';
import LaneActions from '../actions/LaneActions';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">I Kan Band</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href='#' onClick={this.addLane}
              className='btn red darken-2'>New Lane</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  addLane() {
    LaneActions.create({name: 'Topic Name'});
  }
}

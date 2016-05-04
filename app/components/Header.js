import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
// import RaisedButton from 'material-ui/lib/raised-button';
import LaneActions from '../actions/LaneActions';

const styles = {
  title: {
    cursor: 'pointer'
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>I Kan Band</span>}
        iconElementRight={
          <FlatButton primary={true}
          onClick={this.addLane}
          label="New Lane" />}
      />
    )
  }
  addLane() {
    LaneActions.create({name: 'Topic Name'});
  }
}

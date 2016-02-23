import uuid from 'node-uuid';

import React from 'react';
import Header from './Header.jsx';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{
        id: uuid.v4(),
        task: 'Fight the Gorilla Man'
      },
      {
        id: uuid.v4(),
        task: 'Eat some Vitamin C'
      },
      {
        id: uuid.v4(),
        task: 'Talk to Sarah'
      }]
    }
  }
  render() {
    const notes = this.state.notes
    return (
      <div>
        <Header />
        <button
          onClick={this.addNote}
          className='btn-large'>Add
        </button>
        <Notes notes={notes} />
      </div>
    )
  }
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    })
  }
}

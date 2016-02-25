import AltContainer from 'alt-container';

import React from 'react';
import Header from './Header';


import Lanes from './Lanes';
import LaneStore from '../stores/LaneStore';
import LaneActions from '../actions/LaneActions';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container kanban-app">
          <button
            onClick={this.addNote}
            className='btn-large'>Add
          </button>

          <AltContainer
            stores={[LaneStore]}
            inject={{
              lanes: () => LaneStore.getState().lanes || []
            }}
          >
            <Lanes />
          </AltContainer>
        </div>

      </div>
    )
  }
  addLane() {
    LaneActions.create({name: 'New lane'});
  }
  // addNote(){
  //   NoteActions.create({task: 'New Task'});
  // }
  //
  // deleteNote(id) {
  //   NoteActions.delete(id);
  // }
  //
  // editNote(id, task) {
  //   if(!task.trim()) {
  //     return;
  //   }
  //
  //   NoteActions.update({id, task})
  // }
}

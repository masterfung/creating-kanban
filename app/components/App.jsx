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

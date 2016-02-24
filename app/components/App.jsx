import AltContainer from 'alt-container';

import React from 'react';
import Header from './Header';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

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
            stores={[NoteStore]}
            inject={{
              notes: () => NoteStore.getState().notes
            }}
          >
            <Notes onEdit={this.editNote} onDelete={this.deleteNote} />
          </AltContainer>
        </div>

      </div>
    )
  }
  addNote(){
    NoteActions.create({task: 'New Task'});
  }

  deleteNote(id) {
    NoteActions.delete(id);
  }

  editNote(id, task) {
    if(!task.trim()) {
      return;
    }

    NoteActions.update({id, task})
  }
}

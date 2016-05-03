import React from 'react';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';
import Note from './Note';

export default ({notes, onValueClick, onEdit, onDelete}) => {
  return (
    <div className='note-container'>
      <ul className="notes">
        {notes.length > 0 ? notes.map(note =>
          <Note className="note z-depth-3"
            id={note.id} key={note.id}
            editing={note.editing}
            onMove={LaneActions.move}>

            <Editable
              editing={note.editing}
              value={note.task}
              onValueClick={onValueClick.bind(null, note.id)}
              onEdit={onEdit.bind(null, note.id)}
              onDelete={onDelete.bind(null, note.id)} />
          </Note>
        ) : <p className="text-center notes-empty">
        <strong>Please create a task.</strong>
        </p>}
      </ul>
    </div>
  );
}

import React from 'react';
import Editable from './Editable';
import LaneActions from '../actions/LaneActions';
import Note from './Note';

export default ({notes, onValueClick, onEdit, onDelete}) => {
  return (
    <div className='note-container'>
      <ul className="notes">{notes.map(note =>
        <Note className="note" id={note.id} key={note.id}
          editing={note.editing}
          onMove={LaneActions.move}>
          <Editable
            editing={note.editing}
            value={note.task}
            onValueClick={onValueClick.bind(null, note.id)}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)} />
        </Note>
      )}</ul>
    </div>
  );
}

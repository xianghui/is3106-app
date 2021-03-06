import React from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import '../note.css';

function NoteList(props) {
  var list = props.notes.map((note) => {
    if (note.editMode) {
      return (
        <NoteForm
          key={note.id}
          id={note.id}
          value={note.value}
          editMode={note.editMode}
          onCancelEdit={(id) => props.onEdit(id, false)}
          onDone={props.onDone}
        />
      );
    }
    else {
      return (
        <Note
          key={note.id}
          value={note.value}
          id={note.id}
          onEdit={(id) => props.onEdit(id, true)}
          onDelete={props.onDelete}
        />
      );
    }
  });

  return (
    <div>
      <h3>List of notes:</h3>
      <div className="notes-entry-container">
        {list}
      </div>
    </div>
  );
}

export default NoteList;

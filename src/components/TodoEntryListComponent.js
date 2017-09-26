import React, { Component } from 'react';
import TodoEntryComponent from './TodoEntryComponent';
import TodoFormComponent from './TodoFormComponent';

function TodoEntryListComponent(props) {
  var list = props.notes.map((note) => {
    if (note.editMode) {
      return (
        <TodoFormComponent
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
        <TodoEntryComponent
          key={note.id}
          value={note.value}
          editMode={note.editMode}
          id={note.id}
          onEdit={(id) => props.onEdit(id, true)}
          onDelete={props.onDelete}
        />
      );
    }
  })

  return (
    <div>
      <h3>List of notes:</h3>
      <div className="notes-entry">
        {list}
      </div>
    </div>
  );
}

export default TodoEntryListComponent;

import React, { Component } from 'react';
import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';

class NoteApp extends Component {
  constructor() {
    super();
    this.state = {
      index: 1,
      notes: []
    };

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddEdit = this.handleAddEdit.bind(this);
  }

  //method to handle
  handleEdit(id, editMode) {
    var notes = this.state.notes;
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        notes[i].editMode = editMode;
      }
    }

    //ES6 feature (same as this.setState({notes: notes});)
    this.setState({ notes });
  }

  handleDelete(id) {
    var notes = this.state.notes;
    notes = notes.filter((item) => {
      return item.id !== id;
    });

    //ES6 feature (same as this.setState({notes: notes});)
    this.setState({ notes });
  }

  handleAddEdit(note) {
    if (note.id === 0) {
      //add action
      if (note.value.trim() === "") return;
      note.id = this.state.index;
      this.setState({
        notes: [...this.state.notes, note],
        index: this.state.index + 1
      });
    }
    else{
      //edit action
      if (note.value.trim() === "") {
        //cancel edit
        this.handleEdit(note.id, false);
        return
      }
      else {
        //find the note
        var notes = this.state.notes;

        for (var i = 0; i < notes.length; i++) {
          if (notes[i].id === note.id) {
            note.editMode = false;
            notes[i] = note;
          }
        }

        this.setState({ notes });
      }
    }
  }

  render() {
    return (
      <div className="note-container">
        <NoteForm onDone={this.handleAddEdit} /><br /><br />
        <NoteList
          notes={this.state.notes}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onDone={this.handleAddEdit}
        />
      </div>
    );
  }
}

export default NoteApp;

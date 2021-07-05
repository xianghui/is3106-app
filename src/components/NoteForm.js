import React, { Component } from "react";

import "../note.css";

//notice that this is not a stateless function but still considered as a "component"
//because the state maintained in this component is to aid in UI rendering not to store the data
//and cos we want to use lifecycle methods
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  resetState() {
    this.setState({
      value: this.props.value,
    });
  }

  renderCancelBtn() {
    if (this.props.editMode) {
      return (
        <div className="note-form-cancel">
          <button onClick={() => this.props.onCancelEdit(this.props.id)}>
            Cancel
          </button>
        </div>
      );
    } else {
      if (this.state.value.length > 0) {
        return (
          <div className="note-form-cancel">
            <button
              onClick={() => {
                this.setState({ value: "" });
              }}
            >
              Cancel
            </button>
          </div>
        );
      } else {
        return "";
      }
    }
  }

  renderAddOrEditBtn() {
    var buttonText = "Add";

    if (this.props.editMode) {
      buttonText = "Confirm Edit";
    }

    return (
      <div className="note-form-add">
        <button
          onClick={() => {
            this.props.onDone({
              id: this.props.id,
              value: this.state.value,
            });
            this.resetState();
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }

  render() {
    var cancelBtn = this.renderCancelBtn();
    var addOrEditBtn = this.renderAddOrEditBtn();
    return (
      <div className="note-form-container">
        <textarea
          className="note-form"
          rows="3"
          placeholder="Enter note"
          ref={(input) => (this.textbox = input)}
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        ></textarea>
        {cancelBtn}
        {addOrEditBtn}
      </div>
    );
  }

  //this (lifecycle) method is triggered when this component is mounted
  componentDidMount() {
    if (this.props.editMode) {
      this.textbox.focus();
      this.textbox.select();
    }
  }
}

NoteForm.defaultProps = {
  id: 0,
  value: "",
  editMode: false,
};

export default NoteForm;

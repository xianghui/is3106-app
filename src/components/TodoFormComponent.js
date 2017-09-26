import React, { Component } from 'react';

import '../todo.css';


class TodoFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      value: this.props.value,
      editMode: this.props.editMode
    };
  }

  resetState(){
    this.setState({
      id: this.props.id,
      value: this.props.value,
      editMode: this.props.editMode
    });
  }

  renderCancelBtn() {
    if (this.props.editMode) {
      return (
        <div className="todoForm-cancel-btn">
          <button onClick={() => this.props.onCancelEdit(this.props.id)}>Cancel</button>
        </div>
      );
    }
    else {
      if (this.state.value.length > 0) {
        return (
          <div className="todoForm-cancel-btn">
            <button onClick={() => {
              this.setState({ value: '' });
            }}>Cancel</button>
          </div>
        );
      }
      else {
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
      <div className="todoForm-add-btn">
        <button onClick={() => {
          this.props.onDone(this.state);
          this.resetState();
        }}>{buttonText}</button>
      </div>
    );
  }

  render() {
    var cancelBtn = this.renderCancelBtn();
    var addOrEditBtn = this.renderAddOrEditBtn();
    return (
      <div className="todoFormContainer">
        <textarea
          className="todoForm"
          rows="3"
          placeholder="Enter note"
          ref={(input) => this.textbox = input}
          value={this.state.value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}></textarea>
        {cancelBtn}
        {addOrEditBtn}
      </div>
    );
  }

  //TODO: use lifecycle to do a focus on the textbox
}

TodoFormComponent.defaultProps = {
  id: 0,
  value: '',
  editMode: false,
}

export default TodoFormComponent;

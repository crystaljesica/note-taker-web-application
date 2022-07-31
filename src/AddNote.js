import React, { Component } from 'react';
import PlusCircleOutlineIcon from 'mdi-react/PlusCircleOutlineIcon';

export class AddNote extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const newView = "NoteForm";
    this.props.onShowForm(newView, this.props.currentIndex, false);
  }

  render() {
    return (
      <div className="clickable">
        <span onClick={this.handleClick}>Add a new note
          <span className="icon add-note-button">
            <PlusCircleOutlineIcon/>
          </span>
        </span>
      </div>
    );
  }
}
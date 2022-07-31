import React, { Component } from 'react';
import { DeleteNote } from './DeleteNote';

export class NoteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteVisible: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      deleteVisible: true
    });
  }

  handleMouseLeave() {
    this.setState({
      deleteVisible: false
    });
  }

  handleClick() {
    const newView = "NoteView",
          title = this.props.title,
          body = this.props.body,
          listIndex = this.props.listIndex;
    this.props.onClick(newView, listIndex, true, title, body);
  }

  render() {
    const { listIndex, index, title, body, onDeleteNote } = this.props;

    return (
      <div className="content is-small note-item" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
        onClickCapture={this.handleClick}>
        <h4 className="has-text-grey note-title">{title}</h4>
        <DeleteNote 
          visible={this.state.deleteVisible}
          listIndex={listIndex}
          index={index}
          onClick={onDeleteNote}/>
        <p className="has-text-light-grey">{body}</p>
      </div>
    );
  }
}
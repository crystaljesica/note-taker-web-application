import React, { Component } from 'react';

export class DeleteNote extends Component {
  render() {
    const { visible, listIndex, index, onClick } = this.props;

    let opacity = visible ? { opacity: '1' } : { opacity: '0' };

    return (
      <button 
        className="delete is-small note-delete" 
        style={ opacity }
        onClick={(e) => onClick(listIndex, index, true)}>
      </button>
    );
  }
}
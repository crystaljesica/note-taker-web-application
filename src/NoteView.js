import React, { Component } from 'react';

export class NoteView extends Component {
  render() {
    const { title, body, category } = this.props;
    return (
      <div>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{category}</p>
        <div>{body}</div>
      </div>
    );
  }
}
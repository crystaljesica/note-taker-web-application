import React, { Component } from 'react';
import { NoteInputForm } from './NoteInputForm';
import { NoteView } from './NoteView';

export class ViewingPanel extends Component {

  render() {
    const component = this.props.currentView === "NoteView" 
    ? <NoteView
        title={this.props.noteTitle}
        body={this.props.noteBody}
        category={this.props.noteCategory}/>
    : <NoteInputForm
        categoryList={this.props.categoryList}
        onSubmit={this.props.onSubmit}
        onAddCategory={this.props.onAddCategory}
        currentIndex={this.props.currentIndex}
      />;

    return (
      component
    );
  }
}
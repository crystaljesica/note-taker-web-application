import React, { Component } from 'react';
import { NoteItem } from './NoteItem';

export class NoteList extends Component {

  render() {
    const { index, name, notes, onDeleteNote, onShowNote } = this.props;

    return (
      <div>
        <h2 className="is-size-4 has-text-weight-semibold has-text-primary">{name}</h2>
        <hr className="note-divider"/>
        <div>
          {notes.length > 0 ?
            notes.map((note, idx) => {
              if (!note.deleted) {
                return <NoteItem
                  key={idx}
                  listIndex={index}
                  index={idx}
                  title={note.title}
                  body={note.body}
                  onDeleteNote={onDeleteNote}
                  onClick={onShowNote}
                />
              }
              return false;
            }) : 
              <div className="has-text-centered has-text-grey-light is-size-6 big-margins">
                <em>Not a note in sight!</em>
              </div>
          }
        </div>
        <hr className="note-divider"/>
      </div>
    );
  }
}
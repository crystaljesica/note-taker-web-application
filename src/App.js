import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { ViewingPanel } from './ViewingPanel';
import { NoteList } from './NoteList';
import { AddNote } from './AddNote';
import { CategoryNav } from './CategoryNav';
import '../node_modules/bulma/css/bulma.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [{
        name: "General Notes",
        urlName: "general",
        notes: [{
          title: "Example Note",
          body: "Example text!!!",
          deleted: false
        }, {
          title: "Example Note #2",
          body: "Another note. Whoa!",
          deleted: false
        }]
      }, {
        name: "LC101 Lecture Notes",
        urlName: "lc101",
        notes: []
      }],
      currentView: "NoteView",
      currentNote: {
        title: "Example Note",
        body: "Meow meow instantly break out into full speed gallop across the house for no reason.",
        category: "General Notes"
      },
      currentRoute: "general",
      currentIndex: 0
    };

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleAddNoteInfo = this.handleAddNoteInfo.bind(this);
    this.handleAddNewCategory = this.handleAddNewCategory.bind(this);
    this.handleChangeView = this.handleChangeView.bind(this);
  }

  handleAddNoteInfo(listIndex, title, body) {
    const nextLists = this.state.categories.map((list, idx) => {
      if (idx !== listIndex) {
        return list;
      }
      return Object.assign({}, list, {
        notes: list.notes.concat({
          title: title,
          body: body,
          deleted: false
        })
      });
    });

    this.setState({
      categories: nextLists,
      currentView: "NoteView",
      currentNote: {
        title: title,
        body: body,
        category: nextLists[listIndex].name
      },
      currentRoute: nextLists[listIndex].urlName,
      currentIndex: listIndex
    });
  }

  handleAddNewCategory(value) {
    const prevState = this.state;
    const newState = Object.assign({}, prevState, {
      categories: this.state.categories.concat({
        name: value,
        urlName: value.toLowerCase(),
        notes: []
      })
    });
    this.setState(newState);
  }

  handleDeleteNote(listIndex, index, value) {

    this.setState({
      categories: this.state.categories.map((list, idx) => {
        if (idx !== listIndex) {
          return list;
        }
        return Object.assign({}, list, {
          notes: list.notes.map((note, idx) => {
            if (idx !== index) {
              return note;
            }
            return Object.assign({}, note, { deleted: true });
          })
        })
      }),
      currentNote: this.state.currentNote,
      currentRoute: this.state.currentRoute,
      currentIndex: this.state.currentIndex
    });
  }

  handleChangeView(view, 
                   listIndex,
                   isAddingNote,
                   title, 
                   body) {

    title = isAddingNote ? title : this.state.currentNote.title;
    body = isAddingNote ? body : this.state.currentNote.body;
    const category = isAddingNote 
      ? this.state.categories[listIndex].name 
      : this.state.currentNote.category;

    this.setState({
      categories: this.state.categories,
      currentView: view,
      currentNote: {
        title: title,
        body: body,
        category: category
      },
      currentRoute: this.state.currentRoute,
      currentIndex: listIndex
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <section className="section">
            <h1 className="title">
              Notify
            </h1>
            <p className="subtitle">
              Start by adding a <strong>note</strong> below!
            </p>
          </section>
          <div className="box">
            <CategoryNav
              categoryList={this.state.categories}
              onSwitch={this.handleChangeView}/>
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child">
                  {this.state.categories.map((list, index) => {
                    let path = `/${list.urlName}`;
                    if (index === 0) {
                      path = `(/|${path})`;
                    }
                    return <Route key={index} exact path={path} render={() => {
                      return <NoteList
                        key={index}
                        index={index}
                        name={list.name}
                        notes={list.notes}
                        onDeleteNote={this.handleDeleteNote}
                        onShowNote={this.handleChangeView}
                      />
                      }}
                    />
                  })}
                  <div className="columns is-centered is-marginless">
                    <AddNote
                      onShowForm={this.handleChangeView}
                      currentIndex={this.state.currentIndex}/>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child">
                  <ViewingPanel
                    categoryList={this.state.categories}
                    onSubmit={this.handleAddNoteInfo}
                    onAddCategory={this.handleAddNewCategory}
                    currentView={this.state.currentView}
                    currentIndex={this.state.currentIndex}
                    noteTitle={this.state.currentNote.title}
                    noteBody={this.state.currentNote.body}
                    noteCategory={this.state.currentNote.category}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

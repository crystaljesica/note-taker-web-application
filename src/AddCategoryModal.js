import React, { Component } from 'react';

export class AddCategoryModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryToAdd: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const categoryToAdd = e.target.value;
    this.setState({
      categoryToAdd: categoryToAdd
    });
  }

  handleSubmit() {
    this.props.onAddCategory(this.state.categoryToAdd);
    this.handleClick();
  }

  handleClick() {
    this.props.onClick(false);
  }

  render() {
    return(
      <div className={"modal " + (this.props.modalActive ? "is-active" : "")}>
        <div className="modal-background" onClickCapture={this.handleClick}></div>
          <div className="modal-content">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-weight-bold">New Category</p>
            <button className="delete" aria-label="close" onClick={this.handleClick}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <div className="control">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Category name"
                  onChange={e => this.handleChange(e)}/>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button 
              className="button is-primary" 
              onClick={this.handleSubmit}>
              Add Category
            </button>
          </footer>
          <button 
            className="modal-close is-large" 
            aria-label="close"
            onClick={this.handleClick}>
          </button>
      </div>
    </div>
    );
  }
}
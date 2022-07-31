import React, { Component } from 'react';
import { AddCategoryModal } from './AddCategoryModal';
import PlusCircleOutlineIcon from 'mdi-react/PlusCircleOutlineIcon';

export class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(bool) {
    this.setState({
      modalActive: bool
    });
  }

  render() {
    return(
      <div>
        <div 
          className="dropdown-item clickable"
          onClick={() => this.handleClick(true)}>
          <span className="is-size-6 has-text-weight-semibold">
            {this.props.message}
            <span className="icon add-note-button">
              <PlusCircleOutlineIcon/>
            </span>
          </span>
        </div>
        <AddCategoryModal
          modalActive={this.state.modalActive}
          onClick={this.handleClick}
          onAddCategory={this.props.onAddCategory}/>
      </div>
    );
  }
}
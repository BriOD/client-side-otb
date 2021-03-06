import React, { Component } from 'react';
import MenuItemForm from './menuItemForm';
import MenuItem from './menuItem';

// returns either a MenuItemFrom or a MenuItem based on the prop editFromOpen

class EditableMenuItem extends Component {
  state = {
    editFromOpen: true,
  };

  handleEditClick = () => {
    this.openForm();
  };

  handleFormClose = () => {
    this.closeForm();
  };

  handleSubmit = (menuItem) => {
    this.props.onFormSubmit(menuItem);
    this.closeForm();
  };

  closeForm = () => {
    this.setState({ editFormOpen: false });
  };

  openForm = () => {
    this.setState({ editFormOpen: true });
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <MenuItemForm
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          price={this.props.price}
          onFormSubmit={this.handleSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <MenuItem
          id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          price={this.props.price}
          onEditClick={this.handleEditClick}
          onTrashClick={this.props.onTrashClick}
        />
      );
    }
  }

}

export default EditableMenuItem;

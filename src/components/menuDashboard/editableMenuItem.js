import React, { Component } from 'react';
import MenuItemForm from './menuItemForm';
import MenuItem from './menuItem';

// returns either a MenuItemFrom or a MenuItem based on the prop editFromOpen

class EditableMenuItem extends Component {
  state = {
    editFromOpen: false,
  };

  render() {
    if (this.props.editFormOpen) {
      return (
        <MenuItemForm
        id={this.props.id}
          title={this.props.title}
          description={this.props.description}
          price={this.props.price}
        />
      );
    } else {
      return (
        <MenuItem
        id={this.props.id}
        title={this.props.title}
        description={this.props.description}
        price={this.props.price}
        />
      );
    }
  }

}

export default EditableMenuItem;

import React, { Component } from 'react';
import MenuItemForm from './menuItemForm'

class ToggleableMenuItemForm extends React.Component {
  render() {
    if (this.props.isOpen) {
      return (
        <MenuItemForm />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'>
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }

}

export default ToggleableMenuItemForm;

import React, { Component } from 'react';
import EditableMenuItem from './editableMenuItem'

class EditableMenuItemList extends Component {
  render() {
    const menuItems = this.props.menuItems.map((menuItem) => (
      <EditableMenuItem
        key={menuItem.id}
        id={menuItem.id}
        title={menuItem.title}
        description={menuItem.description}
        price={menuItem.price}
      />
    ))
    return (
      <div>
        {menuItems}
      </div>
    );
  }

}

export default EditableMenuItemList;

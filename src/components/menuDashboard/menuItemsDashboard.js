import React, { Component } from 'react';
import EditableMenuItemList from './editableMenuItemsList';
import ToggleableMenuItemForm from './toggleableMenuItemFrom'

class MenuItemsDashboard extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>

          <EditableMenuItemList />
          <ToggleableMenuItemForm
            isOpen={true}
            // used to determine weather to render a '+' or a MenuItemFrom
          />
        </div>
      </div>
    );
  }

}

export default MenuItemsDashboard;

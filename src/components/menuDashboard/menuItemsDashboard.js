import React, { Component } from 'react';
import cuid from 'cuid';

import EditableMenuItemList from './editableMenuItemsList';
import ToggleableMenuItemForm from './toggleableMenuItemFrom'


class MenuItemsDashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className='ui three column centered grid'>
          <div className='column'>

            <EditableMenuItemList />
            <ToggleableMenuItemForm
              isOpen={false}
              // used to determine weather to render a '+' or a MenuItemFrom
            />
          </div>
        </div>
      </div>
    );
  }

}

export default MenuItemsDashboard;

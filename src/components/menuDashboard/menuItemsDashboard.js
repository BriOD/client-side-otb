import React, { Component } from 'react';
import cuid from 'cuid';

import EditableMenuItemList from './editableMenuItemsList';
import ToggleableMenuItemForm from './toggleableMenuItemFrom'

class MenuItemsDashboard extends Component {
  state = {
    menuItems: [
      {
        title: 'Creamy Winter Vegetable Soup',
        description: "lots of winter vegetables cooked in chicken stock, then blended. The soup's special finishing touch comes from cream and a spoonful of mustard",
        price: '12.35',
        id: cuid()
      },
      {
        title: 'Gravlax',
        description: "Gravlax is a Nordic speciality and consists of boned salmon dry-cured overnight in salt and sugar. The cured salmon can be eaten like smoked salmon, just with a trickle of lemon juice, or with a light sauce of cream cheese and herbs.",
        price: '22.85',
        id: cuid()
      },
      {
        title: '6 OZ. CENTER-CUT SIRLOIN',
        description: "Center-cut for tenderness. Lean, hearty and full of flavor",
        price: '17.68',
        id: cuid()
      },
      {
        title: 'GRILLED CHICKEN ON THE BARBIE',
        description: "Seasoned and wood-fire grilled chicken breast.",
        price: '14.35',
        id: cuid()
      },
      {
        title: 'BONE-IN NATURAL CUT RIBEYE',
        description: "Bone-in and extra marbled for maximum tenderness. Seasoned and wood-fire grilled over oak.",
        price: '22.35',
        id: cuid()
      }
    ]
  }

  handleCreateFormSubmit = (menuItem) => {
    this.createMenuItem(menuItem);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateMenuItem(attrs);
  };

  handleTrashClcik = (menuItemId) => {
    this.deleteMenuItem(menuItemId);
  };

  createMenuItem = (menuItem) => {
    const m = newMenuItem(menuItem);
    this.setState({
      menuItems: this.state.menuItems.concat(m),
    });
  };

  deleteMenuItem = (menuItemId) => {
    this.setState({
      menuItems: this.state.menuItems.filter(m => m.id !== menuItemId),
    });
  };

  updateMenuItem = (attrs) => {
    this.setState({
      menuItems: this.state.menuItems.map((menuItem) => {
        if (menuItem.id === attrs.id) {
          return Object.assign({}, menuItem, {
            title: attrs.title,
            description: attrs.description,
            price: attrs.price,
          });
        } else {
          return menuItem;
        }
      }),
    });
  };



  render() {
    return (
      <div className="dashboard">
        <div className='ui three column centered grid'>
          <div className='column'>

            <EditableMenuItemList
              menuItems={this.state.menuItems}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClcik}
            />
            <ToggleableMenuItemForm
              onFormSubmit={this.handleCreateFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  };

}

function newMenuItem(attrs) {
  const menuItem = {
    title: attrs.title,
    description: attrs.description,
    price: attrs.price,
    id: cuid(),
  };
  return menuItem;
}

export default MenuItemsDashboard;

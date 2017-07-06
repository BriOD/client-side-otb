import React, { Component } from 'react';
import { connect } from 'react-redux';

import cuid from 'cuid';

import EditableMenuItemList from './editableMenuItemsList';
import ToggleableMenuItemForm from './toggleableMenuItemFrom'

class MenuItemsDashboard extends Component {

  renderMenuItem() {
    return this.props.menuItems.map((mi) => {
      return (
        <li key={mi.id} className='header'>{mi.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className='container'>
        {this.renderMenuItem()}
      </ul>
    )
  }


  // state = {
  //   menuItems: []
  // }
  //
  // handleCreateFormSubmit = (menuItem) => {
  //   this.createMenuItem(menuItem);
  // };
  //
  // handleEditFormSubmit = (attrs) => {
  //   this.updateMenuItem(attrs);
  // };
  //
  // handleTrashClick = (menuItemId) => {
  //   this.deleteMenuItem(menuItemId);
  // };
  //
  // createMenuItem = (menuItem) => {
  //   const m = newMenuItem(menuItem);
  //   this.setState({
  //     menuItems: this.state.menuItems.concat(m),
  //   });
  // };
  //
  // deleteMenuItem = (menuItemId) => {
  //   this.setState({
  //     menuItems: this.state.menuItems.filter(m => m.id !== menuItemId),
  //   });
  // };
  //
  // updateMenuItem = (attrs) => {
  //   this.setState({
  //     menuItems: this.state.menuItems.map((menuItem) => {
  //       if (menuItem.id === attrs.id) {
  //         return Object.assign({}, menuItem, {
  //           title: attrs.title,
  //           description: attrs.description,
  //           price: attrs.price,
  //         });
  //       } else {
  //         return menuItem;
  //       }
  //     }),
  //   });
  // };
  //
  //
  //
  // render() {
  //   return (
  //     <div className="dashboard">
  //       <div className='ui three column centered grid'>
  //         <div className='column'>
  //
  //           <EditableMenuItemList
  //             menuItems={this.state.menuItems}
  //             onFormSubmit={this.handleEditFormSubmit}
  //             onTrashClick={this.handleTrashClick}
  //           />
  //           <ToggleableMenuItemForm
  //             onFormSubmit={this.handleCreateFormSubmit}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

}

// function newMenuItem(attrs) {
//   const menuItem = {
//     title: attrs.title,
//     description: attrs.description,
//     price: attrs.price,
//     id: cuid(),
//   };
//   return menuItem;
// }

function mapStateToProps(state) {
  // whatever is returned will show up as props inside what I designate it to be.
  return {
    menuItems: state.menuItems
  };
}

export default connect(mapStateToProps)(MenuItemsDashboard);

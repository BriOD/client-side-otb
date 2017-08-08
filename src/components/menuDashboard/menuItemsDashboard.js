import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchMenuItems } from '../../actions'

import MenuItem from './menuItem';
// import EditableMenuItemList from './editableMenuItemsList';
// import ToggleableMenuItemForm from './toggleableMenuItemFrom'

class MenuItemsDashboard extends Component {
  componentDidMount(){
    this.props.fetchMenuItems();
  }

  renderMenuItems() {
    return _.map(this.props.menuItems, item => {
      return (
        <MenuItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      )
    });
  }


  render() {
    return (
      <div className="dashboard">
        <div className='ui three column centered grid'>
          <div className='column'>
            {this.renderMenuItems()}
          </div>
        </div>
      </div>
    );
  };

}

function mapStateToProps(state) {
    return { menuItems: state.menuItems };
}

export default connect(mapStateToProps, { fetchMenuItems })(MenuItemsDashboard);

// function newMenuItem(attrs) {
//   const menuItem = {
//     title: attrs.title,
//     description: attrs.description,
//     price: attrs.price,
//     id: cuid(),
//   };
//   return menuItem;
// }







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

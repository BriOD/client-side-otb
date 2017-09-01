import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchMenuItems } from '../actions'
import { CSSTransitionGroup } from 'react-transition-group'
import MenuItem from '../components/menuItem';
import '../style/style.css'
class MenuItemsDashboard extends Component {


  componentDidMount(){
    this.props.fetchMenuItems();
  }

  mostLikedItems = () => {
    //take list of items, and sort them by most liked.
    const sortedArray = this.props.menuItems.sort((a, b) => {
      return b.likes - a.likes
    });
    console.log(sortedArray)
  }

  renderMenuItems = () => {


    return _.map(this.props.menuItems, item => {
      return (
        <MenuItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          likes={item.likes}
        />
      )
    });
  }


  render() {
    // console.log("props:", this.props)
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    };

    return (
      <div className="dashboard">
        <div className='ui three column centered grid'>
          <div className='column'>
            <CSSTransitionGroup {...transitionOptions}>
                {this.renderMenuItems()}
            </CSSTransitionGroup>
          </div>
          <button onClick={this.mostLikedItems}>sort</button>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMenuItem } from '../actions';

class MenuItem extends Component {

  handleTrashClick = () => {
    this.props.deleteMenuItem(this.props.id);
  };

  // handleLike = () => {
  //   this.setState({likes: this.state.likes +1});
  // };

  update = (id) => {
    console.log('a')

    fetch(`http://localhost:3001/api/menu_items/56`)
      .then(response => {
        console.log('b')
        return response.json()
      })
      .then(data => console.log("c", data))

    console.log('d')
  }

  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}<span>...{this.props.price}</span>
          </div>
          <div className='meta'>
            {this.props.description}
          </div>
          <div className='meta'>
            {this.props.likes}
          </div>

          <div className='extra content'>

            <span
              className='right floated trash icon'
              onClick={this.handleTrashClick}
            >
              <i className='trash icon' />
            </span>
          </div>

        </div>
      </div>
    );
  }


}

export default connect(null, { deleteMenuItem })(MenuItem);

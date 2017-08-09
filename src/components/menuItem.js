import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMenuItem } from '../actions';

class MenuItem extends Component {
  handleTrashClick = () => {
    this.props.deleteMenuItem(this.props.id);
  };

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

          <div className='extra content'>
            <span
              className='right floated edit icon'
              // onClick={this.props.onEditClick}
            >
              <i className='edit icon' />
            </span>
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

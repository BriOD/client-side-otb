import React, { Component } from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.description}
          </div>
          <div className='meta'>
            {this.props.price}
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
      </div>
    );
  }

}

export default MenuItem;

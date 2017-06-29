import React, { Component } from 'react';

class MenuItem extends Component {
  handleTrashClcik = () => {
    this.props.onTrashClick(this.props.id);
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
            <button
              className='right floated edit icon'
              onClick={this.props.onEditClcik}
            >
              <i className='edit icon' />
            </button>
            <button
              className='right floated trash icon'
              onClick={this.handleTrashClcik}
            >
              <i className='trash icon' />
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export default MenuItem;

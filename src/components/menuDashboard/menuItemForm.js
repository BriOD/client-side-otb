import React, { Component } from 'react';

class MenuItemForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' defaultValue={this.props.title} />
            </div>
            <div className='field'>
              <label>Description</label>
              <input type='text' defaultValue={this.props.description} />
            </div>
            <div className='field'>
              <label>Price</label>
              <input type='text' defaultValue={this.props.price} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button'>
                {submitText}
              </button>
              <button className='ui basic red button'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default MenuItemForm;

import React, { Component } from 'react';

class MenuItemForm extends Component {
  state = {
    title: this.props.title || '',
    description: this.props.description || '',
    price: this.props.price || ''
  };
  // if the MenuItemForm is creating a new menu item opposed to editing an existing one
  // those props would be undefined. In that case, we initialize to a blank string

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price
    });
  }

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
            <div className='field'>
              <label>Description</label>
              <input
                type='text'
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            </div>
            <div className='field'>
              <label>Price</label>
              <input
                type='text'
                value={this.state.price}
                onChange={this.handlePriceChange}
              />
            </div>
            <div className='ui two bottom attached buttons'>
              <button
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button
              className='ui basic red button'
              onClick={this.props.onFormClose}
            >
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

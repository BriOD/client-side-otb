import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewMenuItemForm extends Component {
  renderField(field) {
    return (
      <div className="field">
        <label>{field.label}</label>
        <input
          className="field"
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field
          label="Title"
          name="title"
          placeholder="Title"
          component={this.renderField}

        />
        <Field
          label="Description"
          name="description"
          placeholder="Description"
          component={this.renderField}
        />
        <Field
          label="Price"
          name="price"
          placeholder="Price"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // values is an object that containes the values of all the input fields
  const errors = {};

  // validate the inputs from 'values'

  return errors; 

}

export default reduxForm({
    validate,
    form: 'MenuItemNewForm' // this string must be unique. it identifies which form we a re dealing with
})(NewMenuItemForm);

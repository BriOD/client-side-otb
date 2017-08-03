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
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

        <button type="submit" className="positive ui button">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // values is an object that containes the values of all the input fields
  const errors = {};

  // validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.description) {
    errors.description = "Please enter a description";
  }
  if (!values.price) {
    errors.price = "Please enter a price";
  }

  return errors;
  // if we return an empty errors object, redux forms assumes that our form is working correctly
  // if errors has any properties, redux form assumes the form is invalid, and will not submit

}

export default reduxForm({
    validate,
    form: 'MenuItemNewForm' // this string must be unique. it identifies which form we a re dealing with
})(NewMenuItemForm);

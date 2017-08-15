import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createMenuItem } from '../actions';


import '../index.css'

class NewMenuItemForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form ${touched && error ? 'danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          type="text"
          placeholder={field.placeholder}
          {...field.input}
        />
        <div className="errors">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // console.log(this.props.history);
    this.props.createMenuItem(values,
      this.props.history);
      /*
      automatically navigate to wherever we say.
      inside a cb function so it only does so after new menu item is created
      now we are passing this function to out action creator,
      now we have to tell out action creator what to do with it
      */
    };
  

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
        <Link to="/" className="ui red button">Cancel</Link>
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
})(
  connect(null, { createMenuItem })(NewMenuItemForm)
);

/* STEPS FOR CALLING AN ACTION CREATOR FROM THIS FILE:
  1) import connect helper from react-redux
  2)import action creator that i created
  3) the syntax to combine it with redux-form is a little weird.
*/

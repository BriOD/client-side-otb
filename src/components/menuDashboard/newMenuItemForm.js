import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewMenuItemForm extends Component {
  render() {
    return (
      <h1>New Menu Item Form</h1>
    );
  }
}

export default reducForm({
    form: 'MenuItemNewForm'
})(NewMenuItemForm);

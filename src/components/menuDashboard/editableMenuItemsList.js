import React, { Component } from 'react';
import EditableMenuItem from './editableMenuItem'

class EditableMenuItemList extends React.Component {
  render() {
    return (
      <div>
        <EditableMenuItem
          title='Salmon'
          description='Whatever they say about salmon'
          price='14.95'
          editFormOpen={false}
        />
        <EditableMenuItem
          title='Lasagna'
          description='Whatever they say about lasagna'
          price='12.99'
          editFormOpen={true}
        />
      </div>
    );
  }

}

export default EditableMenuItemList;

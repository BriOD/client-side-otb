import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMenuItem, likeMenuItem } from '../actions';

class MenuItem extends Component {
  constructor(props){
    super(props)
    this.state = {likes: this.props.likes}
  }

  handleTrashClick = () => {
    this.props.deleteMenuItem(this.props.id);
  };

    // i want to change the value of the like, and then pass the new value to the update action

  // i might need a function that handles updating the menuItem, and then it calls the action
  // to fire the API request


  handleLike = () => {
    const id = this.props.id
    const likes = this.state.likes +1;
    this.props.likeMenuItem(id, likes)
  };


  render() {
    console.log(this.state.likes)

    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}<span>...{this.props.price}</span>
          </div>
          <div className='meta'>
            {this.props.description}
          </div>
          <div className='meta'>
            {this.props.likes}
            <bttn onClick={this.handleLike}><i className="empty star icon" /></bttn>
          </div>


          <div className='extra content'>

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



export default connect(null, { deleteMenuItem, likeMenuItem })(MenuItem);

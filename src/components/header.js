import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)} className="ui green basic button">Sign Out</button>;
    }
    return <button onClick={() => this.props.authenticate(true)} className="ui green basic button">Sign In</button>;
  }
  render(){
    return(
        <div className="App-header">
          <h1>On The Blvd.</h1>
          <img src="http://i.imgur.com/stGZhYjm.png" alt=""/>
          <div className="Button-div">
            <Link className="ui green basic button" to="/">Home</Link>
            <Link className="ui green basic button" to="/lunch">Lunch</Link>
            <Link className="ui green basic button" to="/dinner">Dinner</Link>
            <Link className="ui green basic button" to="/specials">Todays Specials</Link>
            <Link className="ui green basic button" to="/menu_items/new">New Menu Item</Link>
            {this.authButton()}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authenticated };
}

export default connect(mapStateToProps, actions)(Header);

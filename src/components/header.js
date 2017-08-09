import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
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
          </div>
      </div>
    );
  }
}

export default Header;

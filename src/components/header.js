import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
      <div className="App-header">
        <img src="http://i.imgur.com/stGZhYjm.png" alt=""/>
        <h1>On The Blvd.</h1>
        <button className="ui green basic button">Home</button>
        <button className="ui green basic button">Lunch</button>
        <button className="ui green basic button">Dinner</button>
        <button className="ui green basic button">Specials</button>
      </div>
    );
  }
}

export default Header;

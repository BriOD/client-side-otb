import React, { Component } from 'react'

class Header extends Component {
  render(){
    return(
        <div className="App-header">
          <h1>On The Blvd.</h1>
          <img src="http://i.imgur.com/stGZhYjm.png" alt=""/>
          <div className="Button-div">
            <button className="ui green basic button">Home</button>
            <button className="ui green basic button">Lunch</button>
            <button className="ui green basic button">Dinner</button>
            <button className="ui green basic button">Todays Specials</button>
          </div>
      </div>
    );
  }
}

export default Header;

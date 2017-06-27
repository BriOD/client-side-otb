import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import DinnerMenu from './components/dinnerMenu';
import GoogleMap from './components/googleMap';
import Menu from './components/menu';

import Menus from './data/menus.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      menus: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DinnerMenu />


      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/header';

// import DinnerMenu from './components/dinnerMenu';
// import GoogleMap from './components/googleMap';
// import Menu from './components/menu';

// import Menus from './data/menus.js';

import MenuItemsDashboard from './components/menuDashboard/menuItemsDashboard';


class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <MenuItemsDashboard />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


// import DinnerMenu from './components/dinnerMenu';
// import GoogleMap from './components/googleMap';
// import Menu from './components/menu';

// import Menus from './data/menus.js';

import MenuItemsDashboard from './components/menuDashboard/menuItemsDashboard';


class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={MenuItemsDashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

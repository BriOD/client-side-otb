import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


// import DinnerMenu from './components/dinnerMenu';
// import GoogleMap from './components/googleMap';
// import Menu from './components/menu';

// import Menus from './data/menus.js';

import MenuItemsDashboard from './components/menuDashboard/menuItemsDashboard';
import NewMenuItemForm from './components/menuDashboard/newMenuItemForm';


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header />
          </div>
            <Switch>
              <Route exact path="/" component={MenuItemsDashboard} />
              <Route exact path="/menu_items/new" component={NewMenuItemForm} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

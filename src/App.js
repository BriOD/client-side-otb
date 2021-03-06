import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


// import DinnerMenu from './components/dinnerMenu';
// import GoogleMap from './components/googleMap';
// import Menu from './components/menu';

// import Menus from './data/menus.js';

import MenuItemsDashboard from './containers/menuItemsDashboard';
import NewMenuItemForm from './containers/newMenuItemForm';
import LunchMenu from './components/lunchMenu';
import DinnerMenu from './components/dinnerMenu';
import Home from './components/home';
import requireAuth from './components/authenticateHOC'; //this is just the function from that file


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header />
          </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/specials" component={MenuItemsDashboard} />
              <Route exact path="/lunch" component={LunchMenu} />
              <Route exact path="/dinner" component={DinnerMenu} />
              <Route exact path="/menu_items/new" component={requireAuth(NewMenuItemForm)} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

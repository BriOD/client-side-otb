import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import DinnerMenu from './components/dinnerMenu'
import GoogleMap from './components/googleMap'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GoogleMap />

      </div>
    );
  }
}

export default App;

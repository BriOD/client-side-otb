import React, { Component } from 'react';


class GoogleMap extends Component{
  componentDidMount(){

    new window.google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: 40.770190,
        lng: -73.918565
      }
    });
  }

  render(){
    return <div className="App" ref="map" />
  }
}

export default GoogleMap;

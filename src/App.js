import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Seattle Jobs</h2>
        </div>
        <div className="map-container">
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;

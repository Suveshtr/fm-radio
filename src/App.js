import React, { Component } from 'react';


import Player from './components/player'
import MapImage from './components/MapImage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <MapImage />
        <Player />
      </div>  
    );
  }
}

export default App;

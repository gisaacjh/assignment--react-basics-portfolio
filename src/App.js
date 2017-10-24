import React, { Component } from 'react';
import PortafolioFixed from './prtafolioFxd.js'
import PortafolioContent from './portafolioCont.js'

class App extends Component {
  render() {
    return (
      <div id="app-container">
        <PortafolioFixed />
        <PortafolioContent />
      </div>
    );
  }
}

export default App;

//
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h1 className="App-title">Welcome to React</h1>
//   </header>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// </div>

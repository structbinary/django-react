import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Zukin</h1>
        </header>
        <p className="App-intro">
          Hope you are good today, To start working edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={this.onClick }> send get /calls </button>
      </div>
    );
  }
  onClick(ev) {
    console.log("Sending a GET API Call !!!");
    axios.get('http://127.0.0.1:8000/products').then(res => {
      console.log(res.json())
    }).then(response => {
      console.log(JSON.stringify(response));
    } )
}
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteApp from './containers/NoteApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to IS3106 Note App</h2>
        </div>
        <br /><br />
        <NoteApp />
      </div>
    );
  }
}

export default App;

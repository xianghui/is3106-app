import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoContainer from './containers/TodoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to IS3106 Todo App</h2>
        </div>
        <br /><br />
        <TodoContainer />
      </div>
    );
  }
}

export default App;

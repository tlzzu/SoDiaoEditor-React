import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor/>
      </div>
    );
  }
}

export default App;

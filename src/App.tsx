import React, { Component } from 'react';
import HelloWorldWrapper from './components/HelloWorldWrapper';
import AlertDialog from './components/AlertDialog';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldWrapper name="panzerchris" />
        <AlertDialog>This is a browser alert window.</AlertDialog>
      </div>
    );
  }
}

export default App;

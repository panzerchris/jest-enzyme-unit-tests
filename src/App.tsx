import React, { Component } from 'react';
import HelloWorldWrapper from './components/HelloWorldWrapper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorldWrapper name="panzerchris" />
      </div>
    );
  }
}

export default App;

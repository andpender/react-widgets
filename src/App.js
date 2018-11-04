import React, { Component } from 'react';
import Clock from "./clock";
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';
import logo from './logo.svg';
import './App.css';

const tabValues = [{"Title":"Lolk", "Content":"Nope not doing it"}, {"Title":"Meh", "Content": "Next is this content"}, {"Title":"Wow", "Content": "Keep making content"}];
const autocompleteNames = ['John', 'Tom', 'Jerry', 'Ralph'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Clock />
          <Tabs 
            tabValues={tabValues}
          />
          {/* <Weather /> */}
          <Autocomplete 
            autocompleteNames={autocompleteNames}
          />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import List from "./components/List";

import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reduxWeather: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <SearchForm acceptableTravelTime={this.state.acceptableTravelTime} />
        <List />
      </div>
    );
  }
}

export default App;

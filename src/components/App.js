import React, { Component } from "react";

import "./App.css";

import Header from "./Header";
import List from "./List";
import CityDetail from "./CityDetail";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reduxWeather: [],
      acceptableTravelTime: "3" //this time is currently hardcoded (not just default setting), since the slider
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
        <CityDetail />
      </div>
    );
  }
}

export default App;

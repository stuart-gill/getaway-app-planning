import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ResultItem from "./components/ResultItem";
import ResultsList from "./components/ResultsList";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Contact />
          <Header />
          <ResultItem />
          <ResultsList />
          <SearchForm />
        </header>
      </div>
    );
  }
}

export default App;

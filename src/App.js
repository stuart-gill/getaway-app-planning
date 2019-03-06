import React, { Component } from "react";

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
      temperature: "75"
    };
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
  }

  handleChangeSlider(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header
            handleChangeSlider={this.handleChangeSlider}
            temperature={this.state.temperature}
          />
        </header>
        <Contact />

        <ResultItem />
        <ResultsList />
        <SearchForm />
      </div>
    );
  }
}

export default App;

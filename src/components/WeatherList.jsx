import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    return <div>weather list</div>;
  }
}

export default connect(
  null,
  { fetchWeather }
)(WeatherList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherDynamically } from "../actions";
import WeatherGridList from "./WeatherGridList";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeatherDynamically(this.props.location); //runs the api call to get weather results
  }

  //Is it ok to put sorting logic in this component, or should this be middleware? Is it okay to declare a constant inside a component like this or should it be state?
  renderList() {
    console.log("this city's weather: ", this.props.thisCitysWeather);
    const sortedWeather = this.props.thisCitysWeather.filter(
      period =>
        period.isDaytime === true &&
        period.number < 7 &&
        period.temperature >= this.props.reduxTemperature &&
        period.shortForecast
          .toLowerCase()
          .includes(this.props.reduxWeather.toLowerCase())
    );
    return (
      <div>
        <WeatherGridList weatherList={sortedWeather} />
      </div>
    );
  }

  render() {
    if (this.props.thisCitysWeather !== undefined) {
      return <div>{this.renderList()}</div>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { reduxWeather, reduxTemperature } = state;
  return {
    thisCitysWeather: state.dynamicWeather[ownProps.location],
    reduxWeather,
    reduxTemperature
  };
};

export default connect(
  mapStateToProps,
  { fetchWeatherDynamically }
)(WeatherList);

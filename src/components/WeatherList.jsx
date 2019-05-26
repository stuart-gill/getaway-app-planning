import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherDynamically } from "../actions";
import WeatherGridList from "./WeatherGridList";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeatherDynamically(this.props.location);
  }

  //helper method to map weatherlist that keeps render method itself cleaner
  renderList() {
    console.log("this city's weather: ", this.props.thisCitysWeather);
    return (
      <div>
        <WeatherGridList weatherList={this.props.thisCitysWeather} />
      </div>
    );
    // return this.props.thisCitysWeather.map((item) => {
    //   if (item.isDaytime && item.number < 8) {
    //     return (
    //       <div key={item.number}>
    //         <WeatherListCard daysWeather={item} />
    //       </div>
    //     );
    //   }
    // });
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
  return {
    thisCitysWeather: state.dynamicWeather[ownProps.location] //square brackets is a way to evaluate a variable in object notation... dot notation would not allow this
  };
};

export default connect(
  mapStateToProps,
  { fetchWeatherDynamically }
)(WeatherList);

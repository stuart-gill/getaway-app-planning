import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherDynamically } from "../actions";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeatherDynamically(this.props.location);
  }

  // componentDidMount() {
  //   this.props.fetchWeather();
  // }

  //helper method to map weatherlist that keeps render method itself cleaner
  renderList() {
    return this.props.dynamicWeatherList.map((item) => {
      return (
        <div key={item.number}>
          <div>
            <h2>{item.name}</h2>
            <p>{item.detailedForecast}</p>
            <img src={item.icon} alt="weather list" />
          </div>
        </div>
      );
    });
  }

  // render() {
  //   return <div>WeatherList</div>;
  // }

  render() {
    if (this.props.dynamicWeatherList !== undefined) {
      return <div>{this.renderList()}</div>;
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    dynamicWeatherList: state.dynamicWeather[ownProps.location]
  };
};

export default connect(
  mapStateToProps,
  { fetchWeatherDynamically }
)(WeatherList);

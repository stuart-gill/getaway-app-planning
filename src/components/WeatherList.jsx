import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeatherDynamically } from "../actions";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeatherDynamically(this.props.location);
  }

  //helper method to map weatherlist that keeps render method itself cleaner
  renderList() {
    return this.props.thisCitysWeather.map((item) => {
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

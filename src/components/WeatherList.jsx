import React, { Component } from "react";
import { connect } from "react-redux";
//import { fetchWeather } from "../actions";
import { fetchWeatherDynamically } from "../actions";

class WeatherList extends Component {
  componentDidMount() {
    this.props.fetchWeatherDynamically(this.props.location);
  }

  // componentDidMount() {
  //   this.props.fetchWeather();
  // }

  // //helper method to map weatherlist that keeps render method itself cleaner
  // renderList() {
  //   return this.props.weatherList.map(item => {
  //     return (
  //       <div key={item.number}>
  //         <div>
  //           <h2>{item.name}</h2>
  //           <p>{item.detailedForecast}</p>
  //           <img src={item.icon} alt="weather icon" />
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    return <div>WeatherList</div>;
  }

  // render() {
  //   return <div>{this.renderList()}</div>;
  // }
}

const mapStateToProps = state => {
  return { weatherList: state.fetchWeather };
};

export default connect(
  mapStateToProps,
  { fetchWeatherDynamically }
)(WeatherList);

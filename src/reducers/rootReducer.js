import { combineReducers } from "redux";
import reduxWeather from "./reduxWeather";
import sortedCities from "./sortedCities";
import selectCity from "./selectCity";
import fetchWeather from "./fetchWeather";
import fetchWeatherDynamically from "./fetchWeatherDynamically";

export default combineReducers({
  reduxWeather,
  sortedCities,
  selectCity,
  fetchWeather,
  fetchWeatherDynamically
});

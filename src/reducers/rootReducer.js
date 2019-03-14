import { combineReducers } from "redux";
import reduxWeather from "./reduxWeather";
import sortedCities from "./sortedCities";
import selectCity from "./selectCity";
import fetchWeather from "./fetchWeather";

export default combineReducers({
  reduxWeather,
  sortedCities,
  selectCity,
  fetchWeather
});

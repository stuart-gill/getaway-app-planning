import { combineReducers } from "redux";
import reduxWeather from "./reduxWeather";
import sortedCities from "./sortedCities";

export default combineReducers({
  reduxWeather,
  sortedCities
});

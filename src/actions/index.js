import { ADD_WEATHER, SORT_CITIES } from "../constants/action-types";

export function addWeather(payload) {
  return { type: ADD_WEATHER, payload };
}
export function sortCities(payload) {
  return { type: SORT_CITIES, payload };
}
//why does payload here not have to be payload: {name, latlong, etc}
//maybe because sortedcities payload is an array of objects
//if it was a single object maybe it would be listed differently?
//or it we were passed two separate parameters like
//function sortCities(name, latlong)
//then we would say payload: {name, latlong}
//which is the same as payload{name: name, latlong: latlong}

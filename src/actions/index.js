import { ADD_WEATHER, SORT_CITIES } from "../constants/action-types";
export function addWeather(payload) {
  console.log(`add weather action run, payload is ${payload}`);
  return { type: ADD_WEATHER, payload };
}
export function sortCities(payload) {
  console.log(`sort cities action run, payload is ${payload}`);
  return { type: SORT_CITIES, payload };
}

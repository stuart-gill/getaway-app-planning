import { ADD_WEATHER } from "../constants/action-types";
export function addWeather(payload) {
  return { type: ADD_WEATHER, payload };
}

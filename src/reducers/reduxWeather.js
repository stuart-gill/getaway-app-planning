import { ADD_WEATHER } from "../constants/action-types";

const reduxWeather = (state = "default redux weather", action) => {
  if (action.type === ADD_WEATHER) {
    return action.payload.reduxWeather;
  } else {
    return state;
  }
};

export default reduxWeather;

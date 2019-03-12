import { ADD_WEATHER } from "../constants/action-types";

const reduxWeather = (state = "default redux weather", action) => {
  if (action.type === ADD_WEATHER) {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};

export default reduxWeather;

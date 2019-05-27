import { ADD_TEMPERATURE } from "../constants/action-types";

const reduxTemperature = (state = "default redux temperature", action) => {
  if (action.type === ADD_TEMPERATURE) {
    return action.payload.reduxTemperature;
  } else {
    return state;
  }
};

export default reduxTemperature;

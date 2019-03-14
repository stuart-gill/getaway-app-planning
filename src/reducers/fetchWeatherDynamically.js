import { FETCH_WEATHER_DYNAMICALLY } from "../constants/action-types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER_DYNAMICALLY:
      return [...state, action.payload];
    default:
      return state;
  }
};

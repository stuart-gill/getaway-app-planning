import {
  FETCH_WEATHER_DYNAMICALLY,
  CLEAR_WEATHER_LIST
} from "../constants/action-types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER_DYNAMICALLY:
      return Object.assign({}, state, action.payload);
    //return [...state, action.payload];
    case CLEAR_WEATHER_LIST:
      return null;
    default:
      return state;
  }
};

import { SELECT_CITY } from "../constants/action-types";

const selectCity = (state = null, action) => {
  if (action.type === SELECT_CITY) {
    return action.payload;
  } else {
    return state;
  }
};

export default selectCity;

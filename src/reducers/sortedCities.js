import { SORT_CITIES } from "../constants/action-types";

const sortedCities = (state = [], action) => {
  if (action.type === SORT_CITIES) {
    return Object.assign({}, state, action.payload);
  } else {
    return state;
  }
};

export default sortedCities;

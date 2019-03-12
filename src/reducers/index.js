import { ADD_WEATHER, SORT_CITIES } from "../constants/action-types";

const initialState = {
  reduxWeather: "default Redux weather",
  sortedCities: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_WEATHER) {
    console.log(`add weather ran with payload of ${action.payload}`);
    return Object.assign({}, state, action.payload);
    //return [...state, action.payload]; WHY DOESN'T THIS WORK? Does action.payload need to be written differently to work with spread operator, or is state object not iterable (error message suggests this)
    //in this case should I have this reducer only take in SLICE of old state rather than entire store?
  }

  if (action.type === SORT_CITIES) {
    console.log(`sort cities reducer run with payload of ${action.payload}`);
    return Object.assign({}, state, { sortedCities: action.payload });
  }
  return state;
}
export default rootReducer;

//Always remember: the state in redux comes from reducers!
//reducers should be kept very simple right? Little or no logic?

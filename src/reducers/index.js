import { ADD_WEATHER, SORT_CITIES } from "../constants/action-types";
const initialState = {
  reduxWeather: "default Redux weather",
  sortedWeather: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_WEATHER) {
    console.log(`add weather ran with payload of ${action.payload}`);
    return Object.assign({}, state, action.payload);
  }
  if (action.type === SORT_CITIES) {
    console.log(`sort cities reducer run with payload of ${action.payload}`);
    return Object.assign({}, state, action.payload);
  }
  return state;
}
export default rootReducer;

//Always remeber: the state in redux comes from reducers!

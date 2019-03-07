import { ADD_WEATHER } from "../constants/action-types";
const initialState = {
  reduxWeather: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_WEATHER) {
    console.log(action.payload);
    return Object.assign({}, state, action.payload);
  }
  return state;
}
export default rootReducer;

//Always remeber: the state in redux comes from reducers!

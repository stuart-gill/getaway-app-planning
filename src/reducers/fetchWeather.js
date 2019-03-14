
import { FETCH_WEATHER } from "../constants/action-types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload;
    default: 
      return state;
  }
};
  
//switch/case style, more common in redux and usually has multiple cases
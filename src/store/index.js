import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers/rootReducer";

import { sortCitiesMiddleware } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(sortCitiesMiddleware, thunk))
  //applying thunk as middleware is how you get the thunk library to work
);
export default store;

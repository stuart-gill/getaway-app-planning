import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";

// Provider provides store state to rest of app

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import Routes from "./utils/routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app"),
);

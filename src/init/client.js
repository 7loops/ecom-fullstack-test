import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";

import routes from "../routes";

import { Provider } from "react-redux";
import createStore from "../redux/store";
import { fetchProducts } from "../actions/fetchProducts";

require("offline-plugin/runtime").install();

const store = createStore();
store.dispatch(fetchProducts());

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById("app")
);

if (module.hot) {
  module.hot.accept(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById("app")
  );
}

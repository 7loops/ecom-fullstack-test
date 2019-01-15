import React from "react";
import { Router, Route, hashHistory } from "react-router";

import HomePage from "../views/HomePage";
import NotFound from "../views/NotFound";

export default (
  <Router history={hashHistory}>
    <Route path="/" exact={true} component={HomePage} />
    <Route path="*" exact={true} component={NotFound} />
  </Router>
);

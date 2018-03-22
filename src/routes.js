import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import React from "react";

import Landing from "./containers/landing";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact render={props => <Landing />} />
    </Switch>
  </Router>
);

export default Routes;

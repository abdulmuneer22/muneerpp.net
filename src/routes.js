import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import ProjectDetails from "./containers/project_details";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/project-details/:projectId"
        exact
        component={ProjectDetails}
      />
      <Route path="/*" exact component={Home} />
    </Switch>
  </Router>
);

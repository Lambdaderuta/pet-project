import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "src/pages/HomePage";

const MainRouter = () => (
  <Switch>
    <Route component={HomePage} exact path="/" />
  </Switch>
);

export default MainRouter;

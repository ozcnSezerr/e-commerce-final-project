import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

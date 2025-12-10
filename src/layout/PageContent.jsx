import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";

export default function PageContent() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/team">
        <TeamPage />
      </Route>
    </Switch>
  );
}

import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { RandomCityPage } from "../pages/random-city";

const routes = [
  { path: "/", render: <RandomCityPage />, exact: true },
  // { path: "/add-card", render: <AddCard />, exact: true },
];

export const Routes = () => (
  <Switch>
    {routes.map(({ path, exact, render }) => (
      <Route key={path} exact={exact} path={path} render={() => render} />
    ))}
    <Redirect to="/" />
  </Switch>
);

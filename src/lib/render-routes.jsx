import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { RandomCityPage, CityPage } from "../pages";

const routes = [
  { path: "/", render: <RandomCityPage />, exact: true },
  { path: "/city/:id", render: <CityPage />, exact: true },
];

export const Routes = () => (
  <Switch>
    {routes.map(({ path, exact, render }) => (
      <Route key={path} exact={exact} path={path} render={() => render} />
    ))}
    <Redirect to="/" />
  </Switch>
);

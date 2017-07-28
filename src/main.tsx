/**
 * Main file
 */
// tslint:disable-next-line:no-import-side-effect
import "./pwa";
import "./style.scss";
import * as React from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter, Switch } from "react-router-dom";
import { makeStore } from "./makeStore";
import { routes } from "./routes";
const store = makeStore();

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById("app")
);

/**
 * Main file
 */
// tslint:disable-next-line:no-import-side-effect
import "./pwa";
// tslint:disable-next-line:no-import-side-effect
import "./style.scss";
import * as React from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { makeStore } from "./makeStore";
import { AppContainer } from "./AppContainer";
import { Home } from "./pages";

const store = makeStore();

const routes = (
  <HashRouter>
    <AppContainer>
      <Route exact={true} path="/" component={Home} />
    </AppContainer>
  </HashRouter>
);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById("app")
);

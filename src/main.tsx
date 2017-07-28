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
import { AppContainer } from "./AppContainer";
import {
  Home,
  AboutAsync,
  Codergv,
  StrategyPlan,
  Charter,
  CodeOfConduct
} from "./pages";

const store = makeStore();

const routes = (
  <HashRouter>
    <AppContainer>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={AboutAsync} />
      <Switch>
        <Route path="/about/codergv" component={Codergv} />
        <Route path="/about/strategic-plan" component={StrategyPlan} />
        <Route path="/about/charter" component={Charter} />
        <Route path="/about/code-of-conduct" component={CodeOfConduct} />
      </Switch>
    </AppContainer>
  </HashRouter>
);

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById("app")
);

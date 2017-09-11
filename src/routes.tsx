/**
 * Routes
 */
import * as React from "react";
import { HashRouter, Switch, BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import {
  AboutAsync,
  HomeAsync,
  Codergv,
  StrategyPlan,
  Charter,
  CodeOfConduct,
  EventsAsync,
  ProjectsAsync
} from "./pages";
import { AppContainer } from "./AppContainer";

declare const process: {
  env: {
    NODE_ENV: string;
  };
};

const devAppRoute = (
  <HashRouter>
    <AppContainer>
      <Route exact={true} path="/" component={HomeAsync} />
      <Route path="/events" component={EventsAsync} />
      <Route path="/projects" component={ProjectsAsync} />
      <Route path="/about" component={AboutAsync} />
      <Switch>
        <Route path="/about/about-us" component={Codergv} />
        <Route path="/about/strategic-plan" component={StrategyPlan} />
        <Route path="/about/charter" component={Charter} />
        <Route path="/about/code-of-conduct" component={CodeOfConduct} />
      </Switch>
    </AppContainer>
  </HashRouter>
);

const prodAppRoute = (
  <BrowserRouter>
    <AppContainer>
      <Route exact={true} path="/" component={HomeAsync} />
      <Route path="/events" component={EventsAsync} />
      <Route path="/projects" component={ProjectsAsync} />
      <Route path="/about" component={AboutAsync} />
      <Switch>
        <Route path="/about/about-us" component={Codergv} />
        <Route path="/about/strategic-plan" component={StrategyPlan} />
        <Route path="/about/charter" component={Charter} />
        <Route path="/about/code-of-conduct" component={CodeOfConduct} />
      </Switch>
    </AppContainer>
  </BrowserRouter>
);

export const routes =
  process.env.NODE_ENV === "production" ? prodAppRoute : devAppRoute;

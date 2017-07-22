/**
 * Main file
 */

import * as React from "react";
import { render } from "react-dom";
import { Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { AppContainer } from "./AppContainer";

const routes = (
  <HashRouter>
    <AppContainer>
      <Route />
    </AppContainer>
  </HashRouter>
);

render(<AppContainer />, document.getElementById("app"));

// testing code coverage

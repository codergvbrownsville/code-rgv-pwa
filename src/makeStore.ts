/**
 * Store configuration
 */
import { applyMiddleware, createStore, compose } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import { rootReducer } from "./root-reducer/rootReducer";
import { rootEpic } from "./root-epic/rootEpic";
import { isNil, identity } from "ramda";
declare const window: any;

const devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reduxDevTool = isNil(devTool) ? identity : devTool;

const epicMiddleware = createEpicMiddleware(rootEpic);

export const makeStore = () =>
  createStore(
    rootReducer,
    compose(applyMiddleware(epicMiddleware), reduxDevTool)
  );

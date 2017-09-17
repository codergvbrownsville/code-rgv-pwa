/**
 * Root most reducer
 */
import { combineReducers, Action } from "redux";
import { Map } from "immutable";
import { events } from "./events";
import { ui } from "./ui";

export const rootReducer = combineReducers({
  events,
  ui
});

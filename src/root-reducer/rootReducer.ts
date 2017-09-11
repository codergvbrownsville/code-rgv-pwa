/**
 * Root most reducer
 */
import { combineReducers, Action } from "redux";
import { Map } from "immutable";
import { events } from "./events";

export const rootReducer = combineReducers({
  events
});

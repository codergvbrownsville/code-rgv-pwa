/**
 * Reducer for all ui state
 */
import { combineReducers, Action } from "redux";
import { navigation } from "./navigation";

export const ui = combineReducers({
  navigation
});

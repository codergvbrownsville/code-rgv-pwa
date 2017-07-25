/**
 * Root most reducer
 */
import { combineReducers, Action } from "redux";
import { Map } from "immutable";

type State = Map<any, any>;

// tslint:disable-next-line:missing-optional-annotation
const fakeReducer = (state: State = Map(), action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  fakeReducer
});

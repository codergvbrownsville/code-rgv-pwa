/**
 * Navigation reducer
 */
import { Map } from "immutable";
import { SET_NAVIGATION_IS_ACTIVE_CLASS } from "../../action-creators";

type Keys<T> = keyof T;

interface NavUi {
  isBurgerActive: string;
}

interface NavUiMap extends Map<Keys<NavUi>, NavUi[Keys<NavUi>]> {}

type State = NavUiMap;

interface Action<A> {
  type: string;
  payload: A;
}

const setNavClass = (state: State, action: Action<string>) =>
  state.set("isBurgerActive", action.payload);

const initialState = Map({
  isBurgerActive: ""
}) as State;

export const navigation = (
  state: State = initialState,
  action: Action<any>
) => {
  switch (action.type) {
    case SET_NAVIGATION_IS_ACTIVE_CLASS:
      return setNavClass(state, action);
    default:
      return state;
  }
};

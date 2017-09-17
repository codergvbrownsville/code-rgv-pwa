/**
 * Navigation reducer
 */
import { Map } from "immutable";
import { not } from "ramda";
import { TOGGLE_NAVBAR_IS_BURGER_ACTIVE } from "../../action-creators";

type Keys<T> = keyof T;

interface NavUi {
  isBurgerActive: boolean;
}

interface NavUiMap extends Map<Keys<NavUi>, NavUi[Keys<NavUi>]> {}

type State = NavUiMap;

interface Action<A> {
  type: string;
  payload: A;
}

const setNavClass = (state: State, action: Action<boolean>) =>
  state.set("isBurgerActive", not(state.get("isBurgerActive")));

const initialState = Map({
  isBurgerActive: false
}) as State;

export const navigation = (
  state: State = initialState,
  action: Action<boolean>
) => {
  switch (action.type) {
    case TOGGLE_NAVBAR_IS_BURGER_ACTIVE:
      return setNavClass(state, action);
    default:
      return state;
  }
};

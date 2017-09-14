/**
 * Event reducer
 */
import { Map, fromJS } from "immutable";
import { isNil } from "ramda";
import { Action, EventMap } from "../../types";
import { FETCH_EVENTS, SET_EVENTS } from "../../action-creators";

type State = EventMap;

const initialState: State = fromJS([
  {
    eventNum: undefined,
    eventName: undefined,
    eventGits: undefined,
    eventFbLink: undefined,
    eventInfo: undefined,
    speakerNames: undefined,
    eventVideos: undefined,
    evenDate: undefined,
    eventSlides: undefined
  }
]);

const setEvents = (state: State, action: Action<EventMap>) =>
  state.merge(action.payload);

export const events = (
  state: State = initialState,
  action: Action<EventMap>
) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return state;

    case SET_EVENTS:
      return setEvents(state, action);
    default:
      return state;
  }
};

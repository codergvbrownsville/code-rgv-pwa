/**
 * Types used in events
 */
import { Map, List } from "immutable";

type Keys<T> = keyof T;

export interface Action<T> {
  type: string;
  payload: T;
}

export interface Event {
  eventNum: string;
  eventName: string;
  eventGits: string;
  eventFbLink: string;
  eventInfo: string;
  speakerNames: List<string>;
  eventVideos: string;
  eventDate: string;
  eventSlides: string;
}

export interface EventMap
  extends Map<Keys<Event>, Partial<Event[Keys<Event>]>> {}

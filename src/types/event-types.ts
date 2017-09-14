/**
 * Types used in events
 */
import { Map } from "immutable";

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
  speakerNames: string[];
  eventVideos: string;
  eventDate: string;
  eventSlides: string;
}

export type EventKeys =
  | "eventNum"
  | "eventName"
  | "eventGits"
  | "eventFbLink"
  | "eventInfo"
  | "speakerNames"
  | "eventVideos"
  | "eventDate"
  | "eventSlides";

export interface EventMap extends Map<EventKeys, Partial<Event[EventKeys]>> {}

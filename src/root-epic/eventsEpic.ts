/**
 * Epic for events
 */
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ajax } from "rxjs/observable/dom/ajax";
import { Epic, ActionsObservable } from "redux-observable";
import { FETCH_EVENTS, SET_EVENTS } from "../action-creators";
import { EventMap } from "../types";

const eventsRequest = `/codergv-graphql?query={
  events {
    id
    eventNum
    eventName
    eventGits
    eventFbLink
    eventInfo
    speakerNames
    eventVideos
    eventDate
    eventSlides
  }
}`;

export const eventsEpic = (actions$: ActionsObservable<EventMap>) =>
  actions$
    .ofType(FETCH_EVENTS)
    .mergeMap(() =>
      ajax({
        url: eventsRequest,
        responseType: "json",
        crossDomain: true,
        method: "POST"
      })
    )
    .map((res: any) => ({
      type: SET_EVENTS,
      payload: res.response.data.events
    }));

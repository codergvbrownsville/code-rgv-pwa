/**
 * Root most epic
 */

import { combineEpics, Epic, ActionsObservable } from "redux-observable";
import { EventMap } from "../types";
import { List } from "immutable";
import { eventsEpic } from "./eventsEpic";

export const rootEpic: Epic<any, List<EventMap>> = combineEpics(eventsEpic);

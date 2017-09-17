/**
 * Codergv Aplication State
 */
import { List } from "immutable";
import { Ui } from "./ui";
import { EventMap } from "./events";

export interface State {
  events: List<EventMap>;
  ui: Ui;
}

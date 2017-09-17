/**
 * Ui types
 */
import { Map } from "immutable";

export type BurgerStatus = Map<"isBurgerActive", boolean>;

export interface Ui {
  navigation: BurgerStatus;
}

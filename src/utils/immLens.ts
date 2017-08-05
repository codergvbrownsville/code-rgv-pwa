/**
 * Immutable lens
 * @param key string
 */
import * as L from "ramda-lens";
import { Map } from "immutable";

export const immLens = <T>(key: string) =>
  L.lens(
    (x: Map<any, any>) => x.get(key),
    (val: T, x: Map<any, any>) => x.set(key, val)
  );

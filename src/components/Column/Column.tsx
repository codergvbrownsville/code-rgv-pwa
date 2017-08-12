/**
 * Column component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";
import { View } from "../View/View";

const columnEl = View(({ element }: any) =>
  <div className="column is-mobile" key={v4()}>
    {element}
  </div>
);

export const Column = Reader(({ element }: any) =>
  columnEl.contramap(() => ({ element }))
);

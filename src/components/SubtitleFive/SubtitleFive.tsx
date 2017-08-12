/**
 * Subtitle is-5 component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";
import { View } from "../View/View";

const subtitleEl = View(({ subtitle }: any) =>
  <p className="subtitle is-5" key={v4()}>
    {subtitle}
  </p>
);

export const SubtitleFive = Reader(({ subtitle }: any) =>
  subtitleEl.contramap(() => ({ subtitle }))
);

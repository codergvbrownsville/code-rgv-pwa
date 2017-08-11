/**
 * Anchor tag component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";
import { View } from "../View/View";

export const Anchor = View(({ url, text }: any) =>
  <a href={url} key={v4()}>
    {text}
  </a>
);

// export const Anchor = Reader(({ url, text}: any) =>
//   aTag.contramap(() => ({ url, text }))
// );

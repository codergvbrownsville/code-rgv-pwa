/**
 * Anchor tag component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";

interface AnchorParam {
  href: string;
  anchorText: string;
}

const anchorEl = (a: AnchorParam) =>
  <a href={a.href} key={v4()}>
    {a.anchorText}
  </a>;

export const Anchor = undefined;

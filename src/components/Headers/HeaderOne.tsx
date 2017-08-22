/**
 * h1 component
 */

import * as React from "react";
import { v4 } from "uuid";

interface HeaderParam {
  headerText: string;
  style: { [key: string]: string };
}

const headerEl = (h: HeaderParam) =>
  <h1 className="title is-1" key={v4()} style={h.style}>
    {h.headerText}
  </h1>;

export const HeaderOne = undefined;

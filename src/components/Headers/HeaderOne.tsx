/**
 * h1 component
 */

import * as React from "react";
import { v4 } from "uuid";
import { View } from "../View/View";

const headerEl = (h: any) =>
  <h1 className="title is-1" key={v4()} style={h.style}>
    {h.text}
  </h1>;

export const HeaderOne = View(headerEl);

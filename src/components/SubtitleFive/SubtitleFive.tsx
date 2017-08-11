/**
 * Subtitle is-5 component
 */
import * as React from "react";
import { v4 } from "uuid";
import { View } from "../View/View";

export const SubtitleFive = View(({ subtitle }: any) =>
  <p className="subtitle is-5" key={v4()}>
    {subtitle}
  </p>
);

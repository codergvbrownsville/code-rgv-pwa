/**
 * Title is-3 component
 */
import * as React from "react";
import { v4 } from "uuid";
import { View } from "../View/View";

export const TitleThree = View(({ title }: any) =>
  <h1 className="title is-3">
    {title}
  </h1>
);

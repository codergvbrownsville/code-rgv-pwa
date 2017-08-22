/**
 * Title is-3 component
 */
import * as React from "react";
import { v4 } from "uuid";

type Title = {
  title: string;
};

const headerEl = (t: Title) =>
  <h1 className="title is-3" key={v4()}>
    {t.title}
  </h1>;

export const HeaderThree = undefined;

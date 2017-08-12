/**
 * About Title Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { View } from "../View/View";

const titleStyle = {
  color: "#FFAA00",
  textAlign: "center"
};

export const Title = View(({ title }: any) =>
  <h1 className="title is-1" key={v4()} style={titleStyle}>
    {title}
  </h1>
);

/**
 * Header Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { Reader } from "ramda-fantasy";
import { View } from "../View/View";

const backgroundSlice = {
  backgroundColor: "#00b3b3",
  height: "200px",
  marginBottom: "30px",
  paddingTop: "70px"
};

const divEl = View(({ title }: any) =>
  <div key={v4()} style={backgroundSlice}>
    {title}
  </div>
);

export const Header = Reader(({ title }: any) =>
  divEl.contramap(() => ({ title }))
);

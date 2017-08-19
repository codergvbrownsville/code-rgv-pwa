/**
 * About Title Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { map } from "ramda";
import { HeaderOne } from "../Headers";
import { AboutBackgroundSlice } from "./AboutBackgroundSlice";

const titleStyle = {
  color: "#FFAA00",
  textAlign: "center"
};

const h1 = HeaderOne.contramap((t: { headerText: string }) => ({
  headerText: t.headerText,
  style: titleStyle
}));

export const AboutBanner = AboutBackgroundSlice.contramap(
  (t: any) =>
    ({
      title: h1.fold(t)
    } as any)
);

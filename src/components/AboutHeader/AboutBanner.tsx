/**
 * About Title Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { map } from "ramda";
import { HeaderOne } from "../Headers";
import { AboutBackgroundSlice } from "./AboutBackgroundSlice";
import { tap } from "ramda";

const titleStyle = {
  color: "#FFAA00",
  textAlign: "center"
};

const h1 = HeaderOne.contramap((t: { headerText: string }) => ({
  headerText: t.headerText,
  style: titleStyle
}));

export const AboutBanner = AboutBackgroundSlice.contramap(
  (t: { [key: string]: string }) => ({
    title: h1.fold(t)
  })
);

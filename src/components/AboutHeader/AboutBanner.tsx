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

const h1 = HeaderOne.contramap((t: any) => ({
  text: t.text,
  style: titleStyle
}));

const background = AboutBackgroundSlice.contramap((t: any) => ({
  title: h1.fold(t)
}));

export const AboutBanner = background;

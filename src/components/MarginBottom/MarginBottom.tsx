/**
 * Layout out component
 */
import * as React from "react";
import { Reader } from "ramda-fantasy";
import { v4 } from "uuid";

const marginEl = ({ marginBottom }: any) => (view: any) =>
  view.map((element: any) =>
    <div style={marginBottom}>
      {element}
    </div>
  );

export const MarginBottom = Reader(marginEl);

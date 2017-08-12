/**
 * Layout out component
 */
import * as React from "react";
import { Reader } from "ramda-fantasy";
import { v4 } from "uuid";

const marginEl = ({ margin }: any) => (view: any) =>
  view.map((element: any) =>
    <div style={{ margin }} key={v4()}>
      {element}
    </div>
  );

export const MarginContainer = Reader(marginEl);

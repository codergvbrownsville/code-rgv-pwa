/**
 * Title Component for Strategic plan
 */
import * as React from "react";

interface Children<T> {
  children: T;
}

interface Style {
  [key: string]: string;
}

interface StyleProp {
  style: Style;
}

export class Title extends React.PureComponent<Children<string>> {
  public render() {
    const fontStyle: Style = {
      color: "#a6a6a6",
      fontWeight: "bold"
    };
    return (
      <h1 className="title is-4">
        <span style={fontStyle}>
          {this.props.children}
        </span>
      </h1>
    );
  }
}

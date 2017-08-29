/**
 * Box compnent for question and answer
 */
import * as React from "react";

export class Box extends React.PureComponent {
  public render() {
    const boxStyle = {
      border: "1px solid black",
      padding: "20px"
    };
    return (
      <div style={boxStyle}>
        {this.props.children}
      </div>
    );
  }
}

/**
 * Wraps other components to provide margin
 */
import * as React from "react";

export class MarginBottom extends React.PureComponent {
  public render() {
    const margin = {
      marginBottom: "20px"
    };
    return (
      <div style={margin}>
        {this.props.children}
      </div>
    );
  }
}

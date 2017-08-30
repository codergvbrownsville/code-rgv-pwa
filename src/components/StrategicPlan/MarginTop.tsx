/**
 * Component that wraps other components and provides margin
 */
import * as React from "react";

export class MarginTop extends React.Component {
  public render() {
    return (
      <div style={{ marginTop: "20px" }}>
        {this.props.children}
      </div>
    );
  }
}

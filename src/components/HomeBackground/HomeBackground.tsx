/**
 * HomeBackground component
 */
import * as React from "react";

export class HomeBackground extends React.PureComponent {
  public render() {
    return (
      <div style={{ backgroundColor: "#00b3b3" }}>
        <figure className="image">
          {this.props.children}
        </figure>
      </div>
    );
  }
}

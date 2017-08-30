/**
 * Question compoennt for strategic plan
 */
import * as React from "react";

export class Question extends React.PureComponent {
  public render() {
    const borderStyle = {
      borderRight: "1px solid black"
    };

    return (
      <div className="column is-one-third" style={borderStyle}>
        {this.props.children}
      </div>
    );
  }
}

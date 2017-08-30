/**
 * Answer component for Strategic plan
 */
import * as React from "react";

export class Answer extends React.PureComponent {
  public render() {
    return (
      <div className="column">
        {this.props.children}
      </div>
    );
  }
}

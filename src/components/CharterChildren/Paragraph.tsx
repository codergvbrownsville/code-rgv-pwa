/**
 * Paragraph implements subtitle bulma className
 */
import * as React from "react";

export class Paragraph extends React.PureComponent {
  public render() {
    return (
      <p className="subtitle is-5">
        {this.props.children}
      </p>
    );
  }
}

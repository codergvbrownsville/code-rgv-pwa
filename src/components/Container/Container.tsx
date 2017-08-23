/**
 * Component that implements container bulma className
 */
import * as React from "react";

export class Container extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

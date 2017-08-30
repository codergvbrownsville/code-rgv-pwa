/**
 * Component that implements content bulma className
 */
import * as React from "react";

export class Content extends React.PureComponent {
  public render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

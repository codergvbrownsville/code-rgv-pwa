/**
 * Column component for Strategic plan
 */
import * as React from "react";

interface Children<T> {
  children: T;
}

export class Column extends React.PureComponent<Children<JSX.Element[]>> {
  public render() {
    return (
      <div className="columns">
        {this.props.children}
      </div>
    );
  }
}

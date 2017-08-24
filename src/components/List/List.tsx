/**
 * Generic List Component
 */
import * as React from "react";

type Children<T> = {
  children: T;
};

export class List extends React.PureComponent<Children<JSX.Element>> {
  public render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

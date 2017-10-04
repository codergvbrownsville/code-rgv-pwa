/**
 * Component that will provide overflow
 */
import * as React from "react";

type Props<T> = {
  children: T;
};

export class OverflowSection extends React.PureComponent<Props<JSX.Element>> {
  public render() {
    return (
      <section style={{ overflow: "scroll" }}>
        {this.props.children}
      </section>
    );
  }
}

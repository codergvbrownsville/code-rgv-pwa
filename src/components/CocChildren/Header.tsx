/**
 * Generic Header component
 * @param {header: string}
 */
import * as React from "react";
import { v4 } from "uuid";

type IHeader = {
  header: string;
};

export class Header extends React.PureComponent<IHeader> {
  public render() {
    return (
      <h1 className="title is-3" key={v4()}>
        {this.props.header}
      </h1>
    );
  }
}

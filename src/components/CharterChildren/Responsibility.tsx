/**
 * Committee Responsibility part
 */
import * as React from "react";

class Title extends React.PureComponent {
  public render() {
    return (
      <h1 className="title is-5">
        {this.props.children}
      </h1>
    );
  }
}

export class Responsibility extends React.PureComponent {
  public render() {
    return <Title>Committee Responsibility</Title>;
  }
}

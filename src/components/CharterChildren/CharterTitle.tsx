/**
 * Charter Title
 */
import * as React from "react";

const headerStyle = {
  textAlign: "center",
  marginBottom: "50px"
};

class Title extends React.PureComponent {
  public render() {
    return (
      <h1 className="title is-3" style={headerStyle}>
        {this.props.children}
      </h1>
    );
  }
}

export class CharterTitle extends React.PureComponent {
  public render() {
    return <Title>Brownsville Committee Charter</Title>;
  }
}

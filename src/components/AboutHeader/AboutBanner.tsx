/**
 * About Title Component
 */
import * as React from "react";
import { BackgroundSlice } from "../BackgroundSlice/BackgroundSlice";
import { v4 } from "uuid";

const titleStyle = {
  color: "#FFAA00",
  textAlign: "center"
};

class Header extends React.PureComponent {
  public render() {
    return (
      <h1 className="title is-1" style={titleStyle}>
        {this.props.children}
      </h1>
    );
  }
}

export class AboutBanner extends React.Component {
  public render() {
    return (
      <Header>
        {this.props.children}
      </Header>
    );
  }
}

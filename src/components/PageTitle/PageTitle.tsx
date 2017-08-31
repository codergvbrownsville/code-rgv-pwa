/**
 * Page Title Component
 */
import * as React from "react";

export class PageTitle extends React.PureComponent {
  public render() {
    const titleStyle = {
      color: "#FFAA00"
    };
    return (
      <h1 className="title is-1 has-text-centered" style={titleStyle}>
        {this.props.children}
      </h1>
    );
  }
}

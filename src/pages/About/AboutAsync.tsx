/**
 * Lazy loaded about page
 */

import * as React from "react";
import { connect } from "react-redux";

export class AboutAsync extends React.Component<any, any> {
  private component: any;

  public componentWillMount() {
    System.import("./About").then(component => {
      this.component = component;
      this.forceUpdate();
    });
  }

  public render() {
    return this.component
      ? <this.component.default location={this.props.location.pathname} />
      : null;
  }
}

/**
 * Lazy loaded about page
 */

import * as React from "react";

export class AboutAsync extends React.Component {
  private component: any;

  public componentWillMount() {
    System.import("./About").then(component => {
      this.component = component;
      this.forceUpdate();
    });
  }

  public render() {
    return this.component ? <this.component.default /> : null;
  }
}

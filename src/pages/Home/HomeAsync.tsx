/**
 * Lazy loaded Home page
 */
import * as React from "react";
import Home from "./Home";

type Props = {
  location: {
    pathname: string;
  };
};

type Component = {
  default(): Home;
};

export class HomeAsync extends React.Component<Props> {
  private component: Component;

  public componentWillMount() {
    System.import("./Home").then(component => {
      this.component = component;
      this.forceUpdate();
    });
  }

  private isNil(c: Component): boolean {
    return c === undefined || c === null;
  }

  public render() {
    return this.isNil(this.component)
      ? null
      : <this.component.default location={this.props.location.pathname} />;
  }
}

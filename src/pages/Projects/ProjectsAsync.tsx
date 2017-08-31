/**
 * Lazy loaded projects page
 */
import * as React from "react";
import { connect } from "react-redux";
import Projects from "./Projects";

type Props = {
  location: {
    pathname: string;
  };
};

type Component = {
  default(): Projects;
};

export class ProjectsAsync extends React.Component<Props> {
  private component: Component;

  public componentWillMount() {
    System.import("./Projects").then(component => {
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

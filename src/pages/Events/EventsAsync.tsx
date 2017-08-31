/**
 * Lazy loaded events page
 */
import * as React from "react";
import Events from "./Events";

type Props = {
  location: {
    pathname: string;
  };
};

type Component = {
  default(): Events;
};

export class EventsAsync extends React.Component<Props> {
  private component: Component;

  public componentWillMount() {
    System.import("./Events").then(component => {
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

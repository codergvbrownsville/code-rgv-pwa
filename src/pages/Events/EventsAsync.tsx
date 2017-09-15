/**
 * Lazy loaded events page
 */
import * as React from "react";
import { connect } from "react-redux";
import { List } from "immutable";
import { EventMap } from "../../types";
import { Events } from "./Events";

type Props = {
  location: {
    pathname: string;
  };
  state: any;
};

type Component = {
  default(): Events;
  Events(): Events;
};

class Async extends React.Component<Props> {
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
      : <this.component.Events
          location={this.props.location.pathname}
          events={this.props.state}
        />;
  }
}

const mapStateToProps = (state: { events: List<EventMap> }): any => ({
  state: state.events
});

export const EventsAsync = connect(mapStateToProps)(Async);

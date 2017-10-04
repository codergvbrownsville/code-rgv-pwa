/**
 * Lazy loaded events page
 */
import * as React from "react";
import { connect, DispatchProp, ComponentDecorator } from "react-redux";
import { List } from "immutable";
import { isNil } from "ramda";
import { EventMap } from "../../types";
import { Events } from "./Events";

type Props = {
  location: {
    pathname: string;
  };
  state: List<EventMap>;
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

  public render() {
    return isNil(this.component)
      ? null
      : <this.component.Events
          location={this.props.location.pathname}
          events={this.props.state}
        />;
  }
}

type State = {
  events: List<EventMap>;
};

const mapStateToProps = (state: State) => ({
  state: state.events
});

export const EventsAsync = connect(mapStateToProps)(Async as any);

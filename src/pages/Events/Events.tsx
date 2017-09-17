/**
 * Component rendering the events page
 */
import * as React from "react";
import { connect } from "react-redux";
import { List } from "immutable";
import { EventMap } from "../../types";
import { Agenda, EventsListing, OverflowSection } from "../../components";

interface EventsProps {
  location: string;
  events: List<EventMap>;
}

export class Events extends React.Component<EventsProps> {
  public render() {
    return (
      <section>
        <Agenda />
        <OverflowSection>
          <EventsListing events={this.props.events} />
        </OverflowSection>
      </section>
    );
  }
}

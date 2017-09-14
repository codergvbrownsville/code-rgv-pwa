/**
 * Component rendering the events page
 */
import * as React from "react";
import { Agenda } from "../../components";
import { EventsListing } from "../../components";

type Props = {
  location: string;
};

export default class Events extends React.Component<Props> {
  public render() {
    return (
      <section>
        <Agenda />
        <EventsListing />
      </section>
    );
  }
}

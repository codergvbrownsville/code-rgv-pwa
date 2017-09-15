/**
 * Events Listing Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { List } from "immutable";
import { EventMap } from "../../types";
import { Container } from "../Container/Container";

type Props<A> = {
  isThreeQuarters?: boolean;
  isPrimary?: boolean;
  children: A;
};

class Column extends React.PureComponent<Props<JSX.Element[] | JSX.Element>> {
  public render() {
    const isThreeQuarters = this.props.isThreeQuarters ? "is-9" : "";
    return (
      <div className={`column ${isThreeQuarters}`}>
        {this.props.children}
      </div>
    );
  }
}

class Columns extends React.PureComponent<Props<JSX.Element[]>> {
  public render() {
    return (
      <div className="columns">
        {this.props.children}
      </div>
    );
  }
}

class Title extends React.PureComponent {
  public render() {
    return (
      <h1 className="title is-3">
        {this.props.children}
      </h1>
    );
  }
}

class Button extends React.PureComponent<Props<string>> {
  public render() {
    const isPrimary = this.props.isPrimary ? "is-primary" : "is-danger";
    const margin = {
      margin: "2px"
    };
    return (
      <a
        role="button"
        className={`button is-outlined ${isPrimary}`}
        style={margin}
      >
        {this.props.children}
      </a>
    );
  }
}

class Table extends React.PureComponent<Props<JSX.Element[]>> {
  public render() {
    return (
      <table className="table">
        {this.props.children}
      </table>
    );
  }
}

type THProps = {
  theaders: string[];
};

class TableHeaders extends React.PureComponent<THProps> {
  public render() {
    return (
      <thead>
        <tr>
          {this.props.theaders.map((h: string) =>
            <th key={v4()}>
              {h}
            </th>
          )}
        </tr>
      </thead>
    );
  }
}

type TBProps<A> = {
  tbody: A;
};

class TableBody extends React.PureComponent<TBProps<List<EventMap>>> {
  public render() {
    return (
      <tbody>
        <tr>
          {this.props.tbody.map((e: EventMap) => [
            <td key={v4()}>
              {e.get("eventDate")}
            </td>,
            <td key={v4()}>
              {e.get("eventNum")}
            </td>,
            <td key={v4()}>
              {e.get("eventName")}
            </td>,
            <td key={v4()}>
              {e.get("eventInfo")}
            </td>,
            <td key={v4()}>
              {e.get("eventVideos")}
            </td>,
            <td key={v4()}>
              {e.get("speakerNames")}
            </td>
          ])}
        </tr>
      </tbody>
    );
  }
}

type EventProps = {
  events: List<EventMap>;
};

export class EventsListing extends React.PureComponent<EventProps> {
  public render() {
    const tHeaders = ["Date", "#", "Event", "Content", "Video", "Speaker"];
    return (
      <Container>
        <Columns>
          <Column isThreeQuarters>
            <Title>Listing of events:</Title>
          </Column>
          <Column>
            <Button isPrimary>Create Event</Button>
            <Button>Delete Event</Button>
          </Column>
        </Columns>
        <Table>
          <TableHeaders theaders={tHeaders} />
          <TableBody tbody={this.props.events} />
        </Table>
      </Container>
    );
  }
}

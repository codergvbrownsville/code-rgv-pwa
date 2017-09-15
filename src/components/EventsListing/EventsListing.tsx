/**
 * Events Listing Component
 */
import * as React from "react";
import { v4 } from "uuid";
import { List, Map } from "immutable";
import { equals } from "ramda";
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

class Columns extends React.PureComponent<Props<JSX.Element[] | JSX.Element>> {
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

type TagProps = {
  children: string;
};

class Tag extends React.PureComponent<TagProps> {
  public render() {
    return (
      <span key={v4()} className="tag is-small">
        {this.props.children}
      </span>
    );
  }
}

type FAanchor = {
  link: string;
  children: string | JSX.Element;
};

class FontAwesomeAnchor extends React.PureComponent<FAanchor> {
  public render() {
    return (
      <a key={v4()} href={this.props.link}>
        {this.props.children}
      </a>
    );
  }
}

type TBProps<A> = {
  tbody: A;
};

class TableBody extends React.PureComponent<TBProps<List<EventMap>>> {
  private isEqualEmptyString(s: string) {
    return (c: JSX.Element) => (equals(s, "") ? "" : c);
  }

  public render() {
    return (
      <tbody>
        {this.props.tbody.map((e: EventMap) =>
          <tr key={v4()}>
            <td key={v4()}>
              {e.get("eventDate")}
            </td>
            <td key={v4()}>
              {e.get("eventNum")}
            </td>
            <td key={v4()}>
              <a key={v4()} href={e.get("eventFbLink") as string}>
                {e.get("eventName")}
              </a>
            </td>
            <td key={v4()}>
              {this.isEqualEmptyString(e.get("eventGits") as string)(
                <FontAwesomeAnchor link={e.get("eventGits") as string}>
                  <i className="fa fa-github" aria-hidden="true" />
                </FontAwesomeAnchor>
              )}
            </td>
            <td>
              {this.isEqualEmptyString(e.get("eventVideos") as string)(
                <FontAwesomeAnchor link={e.get("eventVideos") as string}>
                  <i className="fa fa-video-camera" aria-hidden="true" />
                </FontAwesomeAnchor>
              )}
            </td>
            <td key={v4()}>
              {(e.get("speakerNames") as string[]).map(
                names =>
                  equals(names, "")
                    ? ""
                    : <Tag>
                        {names}
                      </Tag>
              )}
            </td>
          </tr>
        )}
      </tbody>
    );
  }
}

type EventProps = {
  events: List<EventMap>;
};

export class EventsListing extends React.PureComponent<EventProps> {
  private sortEvents(l: List<EventMap>) {
    return l.sortBy((e: EventMap) =>
      parseInt(e.get("eventNum") as string, 10)
    ) as List<EventMap>;
  }

  public render() {
    // <Column>
    //   <Button isPrimary>Create Event</Button>
    //   <Button>Delete Event</Button>
    // </Column>
    const tHeaders = ["Date", "#", "Event", "Content", "Video", "Speaker"];
    return (
      <Container>
        <Columns>
          <Column isThreeQuarters>
            <Title>Listing of events:</Title>
          </Column>
        </Columns>
        <Table>
          <TableHeaders theaders={tHeaders} />
          <TableBody tbody={this.sortEvents(this.props.events)} />
        </Table>
      </Container>
    );
  }
}

/**
 * Component rendering Events Agenda
 */
import * as React from "react";

interface Children<T> {
  children: T;
}

class Title extends React.PureComponent<Children<string>> {
  public render() {
    const titleStyle = {
      color: "#FFAA00"
    };
    return (
      <h1 className="title is-1 has-text-centered" style={titleStyle}>
        {this.props.children}
      </h1>
    );
  }
}

export class Agenda extends React.PureComponent {
  public render() {
    return <Title>What happens at a Meetup?</Title>;
  }
}

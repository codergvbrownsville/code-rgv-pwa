/**
 * Strategic Plan component
 */
import * as React from "react";
import { Container } from "../Container/Container";

type Children<T> = {
  children: T;
};

class HeaderRed extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-3 has-text-centered">
        <span className="has-text-danger">
          <strong>
            {this.props.children}
          </strong>
        </span>
      </h1>
    );
  }
}

class DisplayDate extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-4 has-text-centered">
        <span className="has-text-info">
          <strong>
            {this.props.children}
          </strong>
        </span>
      </h1>
    );
  }
}
class Title extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-5">
        <span className="has-text-grey">
          {this.props.children}
        </span>
      </h1>
    );
  }
}

export class StrategicPlan extends React.PureComponent {
  public render() {
    return (
      <Container>
        <HeaderRed>Code#RGV Brownsville: Brigade Strategic Plan</HeaderRed>
        <DisplayDate>February, 2017</DisplayDate>
      </Container>
    );
  }
}

/**
 * Committee Responsibility part
 */
import * as React from "react";
import { v4 } from "uuid";
import { responsibilities } from "./responsibilities";
import { List } from "../List";
import { Content } from "../Content";

type Children<T> = {
  children: T;
};

class Title extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-5">
        {this.props.children}
      </h1>
    );
  }
}

class StringItems extends React.PureComponent<Children<string[]>> {
  public render() {
    return (
      <span>
        {this.props.children.map(item =>
          <li key={v4()} className="subtitle is-6">
            {item}
          </li>
        )}
      </span>
    );
  }
}

type ItemsProp = {
  items: string[];
};

class ResponsibilityItems extends React.PureComponent<ItemsProp> {
  public render() {
    return (
      <List>
        <StringItems>
          {this.props.items}
        </StringItems>
      </List>
    );
  }
}

class MarginTop extends React.PureComponent<Children<JSX.Element>> {
  public render() {
    return (
      <div style={{ marginTop: "30" }}>
        {this.props.children}
      </div>
    );
  }
}

export class Responsibility extends React.PureComponent {
  public render() {
    return (
      <MarginTop>
        <Content>
          <Title>Committee Responsibility</Title>
          <ResponsibilityItems items={responsibilities} />
        </Content>
      </MarginTop>
    );
  }
}

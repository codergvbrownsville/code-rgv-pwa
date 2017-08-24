/**
 * Committee Responsibility part
 */
import * as React from "react";
import { v4 } from "uuid";
import { responsibilities } from "./responsibilities";

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

class List extends React.PureComponent<Children<JSX.Element>> {
  public render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

class Items extends React.PureComponent<Children<string[]>> {
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
        <Items>
          {this.props.items}
        </Items>
      </List>
    );
  }
}

class Content extends React.PureComponent {
  public render() {
    return (
      <div className="content" style={{ marginTop: "30px" }}>
        {this.props.children}
      </div>
    );
  }
}

export class Responsibility extends React.PureComponent {
  public render() {
    return (
      <Content>
        <Title>Committee Responsibility</Title>
        <ResponsibilityItems items={responsibilities} />
      </Content>
    );
  }
}

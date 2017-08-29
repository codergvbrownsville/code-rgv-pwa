/**
 * Committee Responsibility part
 */
import * as React from "react";
import { v4 } from "uuid";
import { List } from "../List";
import { Content } from "../Content";

interface Children<T> {
  children: T;
}

class Title extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-5">
        {this.props.children}
      </h1>
    );
  }
}

class Responsibilities extends React.PureComponent<
  Children<(string | JSX.Element)[]>
> {
  public render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }
}

class Item extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <li className="subtitle is-6">
        {this.props.children}
      </li>
    );
  }
}

class MarginTop extends React.PureComponent<Children<JSX.Element>> {
  public render() {
    return (
      <div style={{ marginTop: "30px" }}>
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
          <Responsibilities>
            <Item>
              Develop and recommend to the Board of Directors policies and
              procedures governing the programs and services to be offered by
              Code RGV and the Program to subscribing members and the public.
            </Item>
            <Item>
              Provide policy guidance and consultation for the Executive
              Director in setting priorities for programs and services.
            </Item>
            <Item>
              Develop and ensure a program evaluation process that measures the
              extent to which the Program is achieving its mission.
            </Item>
            <Item>
              Regularly uses the evaluation data to inform and continuously
              improve NHCN programs.
            </Item>
            <Item>
              Coordinate the assignment of activities to committee members and
              volunteers.
            </Item>
            <Item>
              Establish necessary timelines based on member input and follow up
              on assigned responsibilities.
            </Item>
            <Item>
              Schedule and develop an agenda for meetings based on member and
              volunteer input.
            </Item>
            <Item>
              Prepare an annual budget, and prepare presentation for the board.
            </Item>
            <Item>
              Prepare a monthly report provided to the board of directors.
            </Item>
            <Item>
              Ensure the meeting minutes are recorded, completed and distributed
              electronically to the Board in a timely manner.
            </Item>
            <Item>
              Distribute the agenda with minutes to committee members one week
              prior to each scheduled meeting.
            </Item>
            <Item>
              Work with the Development Committee to solicit funding and
              resources necessary to implement the Program.
            </Item>
          </Responsibilities>
        </Content>
      </MarginTop>
    );
  }
}

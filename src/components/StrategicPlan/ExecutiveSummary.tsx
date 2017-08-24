/**
 * Strategic Plan component
 */
import * as React from "react";
import { Container } from "../Container/Container";
import { List } from "../List";
import { Content } from "../Content";

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
    const fontStyle: { [key: string]: string } = {
      color: "#a6a6a6",
      fontWeight: "bold"
    };

    return (
      <h1 className="title is-4">
        <span style={fontStyle}>
          {this.props.children}
        </span>
      </h1>
    );
  }
}

class Question extends React.PureComponent<Children<(string | JSX.Element)[]>> {
  public render() {
    return (
      <List>
        <li>
          {this.props.children}
        </li>
      </List>
    );
  }
}

class Answer extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <List>
        <li>
          {this.props.children}
        </li>
      </List>
    );
  }
}

export class ExecutiveSummary extends React.PureComponent {
  public render() {
    return (
      <Container>
        <HeaderRed>Code#RGV Brownsville: Brigade Strategic Plan</HeaderRed>
        <DisplayDate>February, 2017</DisplayDate>
        <Title>Executive Summary</Title>
        <Content>
          <Question>
            Why is becoming/continuing your work as a Brigade important to your
            community and why is your group ready to do this?
            <Answer>
              Brownsville is a city in South Texas on the U.S.-Mexico border.
            </Answer>
          </Question>
          <Question>
            What will be the focus of your work in 2017?
            <Answer>Sustainability</Answer>
            <Answer>Completing projects for community partners</Answer>
          </Question>
          <Question>
            How will your work as a Brigade drive impact in your local
            community, as well as for your partners and your members?
            <Answer>
              We will consistently meet and be available to receive feedback
              from our local community. We will provide education sessions
              during our meetings to the local community. We will identify and
              community organizations without technology resources, and will
              support the development of a technology community in Brownsville,
              Texas.
            </Answer>
          </Question>
        </Content>
      </Container>
    );
  }
}

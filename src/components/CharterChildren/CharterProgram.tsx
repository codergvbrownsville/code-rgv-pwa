/**
 * Charter Programs
 */
import * as React from "react";
import { Paragraph } from "./Paragraph";

class Header extends React.Component {
  public render() {
    const headerStyle = {
      marginBottom: "35px"
    };

    return (
      <h1 className="title is-4" style={headerStyle}>
        {this.props.children}
      </h1>
    );
  }
}

export class CharterProgram extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header>Program(s)</Header>
        <Paragraph>
          The purpose, or mission, of the Committee is to assist with the
          development and promotion of Code#RGV Brownsville, hereby known as the
          Program; and ensure the Program aligns with Code RGV’s mission to
          create tech entrepreneurs and skilled professionals for the Rio Grande
          Valley.
        </Paragraph>
      </div>
    );
  }
}

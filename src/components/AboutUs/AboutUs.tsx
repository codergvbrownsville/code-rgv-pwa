/**
 * About Us
 */
import * as React from "react";

interface Children<T> {
  children: T;
}

class Paragraph extends React.Component<Children<(string | JSX.Element)[]>> {
  public render() {
    return (
      <p className="subtitle is-5">
        {this.props.children}
      </p>
    );
  }
}

export class AboutUs extends React.PureComponent {
  public render() {
    // tslint:disable-next-line:no-http-string
    const codeRgvUrl = "http://www.codergv.org/";
    return (
      <Paragraph>
        <strong>Code#RGV:Brownsville</strong> is a technology group in
        Brownsville part of
        <a
          href={codeRgvUrl}
          target="_blank"
          role="button"
          rel="noopener noreferrer"
        >
          {" "}Code#RGV
        </a>. We host meet-ups on the first and third Tuesday of every month. We
        aim to bring together people interested in technology and provide an
        environment where they can work on projects, learn new skills,
        socialize, and volunteer for the community.
      </Paragraph>
    );
  }
}

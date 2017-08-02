/**
 * about/who-we-are page
 */
import * as React from "react";
export class Codergv extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <h1 className="title is-1" style={{ textAlign: "center" }}>
          About CodeRGV
        </h1>
        <p>
          <strong>Code#RGV</strong>: Brownsville is a technology group in
          Brownsville part of Code#RGV. We host meet-ups on the first and third
          Tuesday of every month. We aim to bring together people interested in
          technology and provide an environment where they can work on projects,
          learn new skills, socialize, and volunteer for the community.
        </p>
      </div>
    );
  }
}

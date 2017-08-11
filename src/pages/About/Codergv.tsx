/**
 * about/who-we-are page
 */
import * as React from "react";
export class Codergv extends React.PureComponent {
  public render() {
    // tslint:disable-next-line:no-http-string
    const codeRgvUrl = "http://www.codergv.org/";
    return (
      <div className="container">
        <p className="subtitle is-5 has-text-centered">
          <strong>Code#RGV:Brownsville</strong> is a technology group in
          Brownsville part of
          <a
            href={codeRgvUrl}
            target="_blank"
            role="button"
            rel="noopener noreferrer"
          >
            {" "}Code#RGV
          </a>. We host meet-ups on the first and third Tuesday of every month.
          We aim to bring together people interested in technology and provide
          an environment where they can work on projects, learn new skills,
          socialize, and volunteer for the community.
        </p>
      </div>
    );
  }
}

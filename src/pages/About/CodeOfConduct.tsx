/**
 * Code of Conduct sub route
 */
import * as React from "react";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div>
        <h1 className="title is-1" style={{ textAlign: "center" }}>
          Code of Conduct
        </h1>
        <a href="https://github.com/CodeRGV/codeofconduct">
          Our Code of Conduct
        </a>
        <p style={{ color: "#737373" }}>(This link will take you to github)</p>
      </div>
    );
  }
}

/**
 * Code of Conduct sub route
 */
import * as React from "react";
import { FirstParagraph } from "../../components";
import { tap, identity, map } from "ramda";
import { Reader } from "ramda-fantasy";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <div className="column is-mobile">
          <FirstParagraph />
        </div>
      </div>
    );
  }
}

/**
 * Code of Conduct sub route
 */
import * as React from "react";
import {
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  FourthParagraph
} from "../../components";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <div className="column is-mobile">
          <FirstParagraph />
          <SecondParagraph />
          <ThirdParagraph />
          <FourthParagraph />
        </div>
      </div>
    );
  }
}

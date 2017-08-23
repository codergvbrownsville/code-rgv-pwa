/**
 * Code of Conduct sub route
 */
import * as React from "react";
import {
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  FourthParagraph,
  Container
} from "../../components";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <Container>
        <FirstParagraph />
        <SecondParagraph />
        <ThirdParagraph />
        <FourthParagraph />
      </Container>
    );
  }
}

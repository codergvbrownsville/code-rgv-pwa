/**
 * Second paragraph of Charter
 */
import * as React from "react";
import { Paragraph } from "./Paragraph";

export class CharterSecond extends React.PureComponent {
  public render() {
    return (
      <Paragraph>
        The Committee Chairperson shall be appointed by the Board of Directors,
        and nominated by the Committee. The term of the Chairperson is one
        fiscal year (beginning January), and is renewable without limitation.
        Based on performance according to the Committee evaluations, and
        discretion of the Board, Committee Chairperson may be removed at any
        point in the term.
      </Paragraph>
    );
  }
}

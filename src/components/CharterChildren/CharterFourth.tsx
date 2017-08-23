/**
 * Fourth paragraph of Charter
 */
import * as React from "react";
import { Paragraph } from "./Paragraph";

export class CharterFourth extends React.PureComponent {
  public render() {
    return (
      <Paragraph>
        Any one Committee member who misses three (3) consecutive meetings, or
        who misses more than (4) scheduled meetings during a Committee Year may
        be recommended for removal from the Committee at the discretion of the
        Committee Chairperson, unless for such absences, Committee member
        submits in writing legitimate excuses that are approved by the Committee
        Chairperson. Once recommended for removal, Board of Directors will
        consider all evidence and vote on the removal.
      </Paragraph>
    );
  }
}

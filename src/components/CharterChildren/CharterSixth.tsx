/**
 * Sixth paragraph of charter
 */
import * as React from "react";
import { Paragraph } from "./Paragraph";

export class CharterSixth extends React.PureComponent {
  public render() {
    return (
      <Paragraph>
        Committee members have access to confidential documents, knowledge, and
        information. Committee members agree keep all matters confidential, and
        are subject to legal recourse if failure to do so. Software and services
        provided are permitted for use of Code RGV and Committee purposes, and
        are not guaranteed continuance after term on the Committee. Committee
        members are subject to the Conflict of Interest Policy of Code RGV.
      </Paragraph>
    );
  }
}

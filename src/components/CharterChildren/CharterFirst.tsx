/**
 * Charte first paragraph
 */
import * as React from "react";
import { Paragraph } from "./Paragraph";

export class CharterFirst extends React.PureComponent {
  public render() {
    return (
      <Paragraph>
        The Brownsville Committee, hereby known as “Committee”, is a standing
        committee reporting to the Board of Directors, and is established
        pursuant to Article 5 Section 2 of the Bylaws to consist of no more than
        seven (7) Committee members, appointed by the President of the Board.
        Committee may nominate other members to be considered and appointed by
        the Board. The Executive Director shall serve as staff to the Committee.
        A majority of the Committee members, present and voting, shall
        constitute a quorum.
      </Paragraph>
    );
  }
}

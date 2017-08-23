/**
 * CoC First Paragraph
 */
import * as React from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";

const firstParagraph = {
  title: "CodeRGV: Brownsville",
  body: [
    `
      All members of CodeRGV:Brownsville are required to agree with the
      following code of conduct. Cooperation with this Code of Conduct
      from all participants helps to ensure a safe environment for all
      attendees. This Code of Conduct applies to all of our events.
     `,
    `
      tl;dr: Don't be a jerk, or you can't play on the playground.
    `
  ]
};

export class FirstParagraph extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header header={firstParagraph.title} />
        <Paragraph paragraph={firstParagraph.body} />
      </div>
    );
  }
}

/**
 * CoC First Paragraph
 */
import * as React from "react";
import { v4 } from "uuid";

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

const Header = (h: { header: string }) =>
  <h1 className="title is-3" key={v4()}>
    {h.header}
  </h1>;

type IParagraph = {
  paragraph: string[];
};

class Paragraph extends React.PureComponent<IParagraph> {
  public render() {
    return (
      <div>
        {this.props.paragraph.map((content: string) =>
          <p className="subtitle is-5" key={v4()}>
            {content}
          </p>
        )}
      </div>
    );
  }
}

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

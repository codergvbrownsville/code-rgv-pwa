/**
 * CoC Fourth Paragraph
 */
import * as React from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";

// tslint:disable-next-line:no-http-string
const confCoCUrl = "http://confcodeofconduct.com/";

const fourthParagraph = {
  title: "Need Help?",
  body: [" Feel free to contact any of the organizers."]
};

export class FourthParagraph extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header header={fourthParagraph.title} />
        <Paragraph paragraph={fourthParagraph.body} />
        <p>
          Adapted from: <a href={confCoCUrl}>Conference Code of Conduct</a>
        </p>
      </div>
    );
  }
}

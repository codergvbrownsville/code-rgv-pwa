/**
 * CoC Second Paragraph
 */
import * as React from "react";
import { Header } from "./Header";
import { Paragraph } from "./Paragraph";

const secondParagraph = {
  title: "The Brief Version",
  body: [
    `
      CodeRGV:Brownsville is dedicated to providing a harassment-free
      conference experience for everyone, regardless of gender, age,
      sexual orientation, disability, physical appearance, body size,
      race, or religion (or lack thereof). We do not tolerate harassment
      of attendees in any form. Sexual language and imagery is not
      appropriate for any venue, including talks, workshops, parties,
      Twitter and other online media. Attendees violating this code may
      be asked to leave at the discretion of the CodeRGV organizers.
    `
  ]
};

export class SecondParagraph extends React.PureComponent {
  public render() {
    return (
      <div>
        <Header header={secondParagraph.title} />
        <Paragraph paragraph={secondParagraph.body} />
      </div>
    );
  }
}

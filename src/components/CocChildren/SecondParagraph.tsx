/**
 * CoC Second Paragraph
 */
import { MarginContainer } from "../MarginContainer/MarginContainer";
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

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
      be asked to leave at the discretion of the Norfolk.js organizers.
    `
  ]
};

export const SecondParagraphTitle = MarginContainer.ap(TitleThree)
  .run({
    title: secondParagraph.title,
    margin: "0 0 20px 0"
  })
  .fold();

export const SecondParagraphBody = secondParagraph.body.map(
  (subtitle: string) => SubtitleFive.run({ subtitle }).fold()
);

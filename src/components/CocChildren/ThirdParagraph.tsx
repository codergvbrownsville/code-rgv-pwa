/**
 * CoC Third Paragraph
 */
import { MarginContainer } from "../MarginContainer/MarginContainer";
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

const thirdParagraph = {
  title: "The Much Less Brief Version",
  body: [
    `
      Harassment includes offensive verbal comments related to gender,
      age, sexual orientation, disability, physical appearance, body
      size, race, religion, sexual images in public spaces, deliberate
      intimidation, stalking, following, harassing photography or
      recording, sustained disruption of talks or other events,
      inappropriate physical contact, and unwelcome sexual attention.
    `,
    `
      Participants asked to stop any harassing behavior are expected to
      comply immediately.
    `,
    `
      Sponsors are also subject to the anti-harassment policy. In
      particular, sponsors should not use sexualized images, activities,
      or other material.
    `,
    `
      If a participant engages in harassing behavior, organizers may
      take any action they deem appropriate, including warning the
      offender or expulsion from the event.
    `,
    `
      We expect participants to follow these rules at meeting and
      workshop venues and CodeRGV:Brownsville-related social events.
    `
  ]
};

export const ThirdParagraphTitle = MarginContainer.ap(TitleThree)
  .run({
    title: thirdParagraph.title,
    margin: "0 0 20px 0"
  })
  .fold();

export const ThirdParagraphBody = thirdParagraph.body.map((subtitle: string) =>
  SubtitleFive.run({ subtitle }).fold()
);

/**
 * CoC First Paragraph
 */
import { MarginContainer } from "../MarginContainer/MarginContainer";
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

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

export const FirstParagraphTitle = MarginContainer.ap(TitleThree)
  .run({
    title: firstParagraph.title,
    margin: "0 0 20px 0"
  })
  .fold();

export const FirstParagraphBody = firstParagraph.body.map((subtitle: string) =>
  SubtitleFive.run({ subtitle }).fold()
);

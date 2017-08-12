/**
 * CoC Fourth Paragraph
 */
import { MarginContainer } from "../MarginContainer/MarginContainer";
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

// tslint:disable-next-line:no-http-string
const confCoCUrl = "http://confcodeofconduct.com/";

const fourthParagraph = {
  title: "Need Help?",
  body: [
    " Feel free to contact any of the organizers.",
    "Adapted from: Conference Code of Conduct"
  ]
};

export const FourthParagraphTitle = MarginContainer.ap(TitleThree)
  .run({
    title: fourthParagraph.title,
    margin: "0 0 20px 0"
  })
  .fold();

export const FourthParagraphBody = fourthParagraph.body.map(
  (subtitle: string) => SubtitleFive.run({ subtitle }).fold()
);

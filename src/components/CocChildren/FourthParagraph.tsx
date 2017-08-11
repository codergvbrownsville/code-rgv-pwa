/**
 * CoC Fourth Paragraph
 */
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

// tslint:disable-next-line:no-http-string
const confCoCUrl = "http://confcodeofconduct.com/";

export const FourthParagraph = {
  title: TitleThree.fold({ title: "Need Help?" }),
  subtitle1: SubtitleFive.fold({
    subtitle: ` Feel free to contact any of the organizers.`
  }),
  subtitle2: SubtitleFive.fold({
    subtitle: "Adapted from: Conference Code of Conduct"
  })
};

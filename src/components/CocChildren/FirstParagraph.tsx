/**
 * CoC First Paragraph
 */
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

export const FirstParagraph = {
  title: TitleThree.fold({ title: "CodeRGV: Brownsville" }),
  subtitle1: SubtitleFive.fold({
    subtitle: `
        All members of CodeRGV:Brownsville are required to agree with the
        following code of conduct. Cooperation with this Code of Conduct
        from all participants helps to ensure a safe environment for all
        attendees. This Code of Conduct applies to all of our events.
      `
  }),
  subtitle2: SubtitleFive.fold({
    subtitle: `
        tl;dr: Don't be a jerk, or you can't play on the playground.
      `
  })
};

/**
 * CoC Third Paragraph
 */
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

export const ThirdParagraph = {
  title: "The Much Less Brief Version",
  subtitle1: SubtitleFive.fold({
    subtitle: `
        Harassment includes offensive verbal comments related to gender,
        age, sexual orientation, disability, physical appearance, body
        size, race, religion, sexual images in public spaces, deliberate
        intimidation, stalking, following, harassing photography or
        recording, sustained disruption of talks or other events,
        inappropriate physical contact, and unwelcome sexual attention.
      `
  }),
  subtitle2: SubtitleFive.fold({
    subtitle: `
        Participants asked to stop any harassing behavior are expected to
        comply immediately.
      `
  }),
  subtitle3: SubtitleFive.fold({
    subtitle: `
        Sponsors are also subject to the anti-harassment policy. In
        particular, sponsors should not use sexualized images, activities,
        or other material.
      `
  }),
  subtitle4: SubtitleFive.fold({
    subtitle: `
      If a participant engages in harassing behavior, organizers may
      take any action they deem appropriate, including warning the
      offender or expulsion from the event.
    `
  }),
  subtitle5: SubtitleFive.fold({
    subtitle: `
      We expect participants to follow these rules at meeting and
      workshop venues and CodeRGV:Brownsville-related social events.
    `
  })
};

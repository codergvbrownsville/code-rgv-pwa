/**
 * CoC Second Paragraph
 */
import { TitleThree } from "../TitleThree/TitleThree";
import { SubtitleFive } from "../SubtitleFive/SubtitleFive";

export const SecondParagraph = {
  title: TitleThree.fold({ title: "The Brief Version" }),
  subtitle: SubtitleFive.fold({
    subtitle: `
        CodeRGV:Brownsville is dedicated to providing a harassment-free
        conference experience for everyone, regardless of gender, age,
        sexual orientation, disability, physical appearance, body size,
        race, or religion (or lack thereof). We do not tolerate harassment
        of attendees in any form. Sexual language and imagery is not
        appropriate for any venue, including talks, workshops, parties,
        Twitter and other online media. Attendees violating this code may
        be asked to leave at the discretion of the Norfolk.js organizers.
      `
  })
};

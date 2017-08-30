/**
 * Component Explaining
 * Programmatic Focus, Alignment and Impact
 */
import * as React from "react";
import { Box } from "./Box";
import { Column } from "./Column";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { MarginTop } from "./MarginTop";

export class FocusAlignmentImpact extends React.PureComponent {
  public render() {
    return (
      <section>
        <Box>
          <Column>
            <Question>
              <strong>
                What will your Brigade’s activities and projects be? <br />
              </strong>
              What resources will you need to do this work? What will the impact
              of the work be?
            </Question>
            <Answer>
              Most Brigades will focus their efforts on organizing hack nights
              and events like CodeAcross and National Day of Civic Hacking.
              <MarginTop>
                Brigade projects will often be added as they develop throughout
                the year and require resources outside of space at hack night or
                events. More experienced Brigades may have projects that they
                want to continue developing from the previous years.
              </MarginTop>
              <MarginTop>
                Use this prospective projects and events template to answer
                these questions.
              </MarginTop>
            </Answer>
          </Column>
        </Box>
      </section>
    );
  }
}

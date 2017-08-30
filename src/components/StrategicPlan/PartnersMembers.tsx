/**
 * Partners and members
 */
import * as React from "react";
import { Box } from "./Box";
import { Column } from "./Column";
import { Question } from "./Question";
import { Answer } from "./Answer";

export class PartnersMembers extends React.PureComponent {
  public render() {
    return (
      <section>
        <Box>
          <Column>
            <Question>
              <strong>
                Who do you want to partner with in 2017? <br />
              </strong>
            </Question>
            <Answer>
              We partnered with Brownsville Wellness Coalition (Community
              Partner) and Cameron County (Government Partner) in 2016. We are a
              small brigade, so we are still working to assist these partners in
              technology projects. We are interested in approaching the City of
              Brownsville for partnership in 2017.
            </Answer>
          </Column>
        </Box>
        <Box>
          <Column>
            <Question>
              <strong>
                What does your membership look like now and how do you want it
                to grow in 2017?
              </strong>
            </Question>
            <Answer>
              Brownsville is 93% Hispanic / Latino according to the latest U.S.
              Census, so we always expect to have a majority of Hispanic /
              Latino members. We have mostly males who attend meetings, and we
              are interested in increasing ongoing attendance from females in
              the Rio Grande Valley. We are a small group, and our meetings
              fluctuate between as little as four attendees to as many as 30
              attendees. We have found that the quality of the speaker and the
              learning activities offered during the meeting substantially
              affect the number of people who attend.
            </Answer>
          </Column>
        </Box>
      </section>
    );
  }
}

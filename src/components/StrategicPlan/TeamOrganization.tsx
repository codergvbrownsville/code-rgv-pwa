/**
 * Team Development Component for Strategic plan
 */
import * as React from "react";
import { Box } from "./Box";
import { Column } from "./Column";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { MarginTop } from "./MarginTop";

export class TeamOrganization extends React.PureComponent {
  public render() {
    return (
      <section>
        <Box>
          <Column>
            <Question>
              <strong>
                What is your current organizational structure? <br />
              </strong>
              Who is on your core team? What skills and backgrounds are missing
              from your core team?
            </Question>
            <Answer>
              Captain: Johnny Bender (john@codergv.org) <br />
              Delivery Lead: Norb Lara (norb@codergv.org) <br />
              Community Organizer: Ken Aguilar (ken@codergv.org) <br />
              Storyteller: Mauricio Pina (mauricio@codergv.org) <br />
              Diversity Lead: Brenda Cohen-Moncada (brenda@codergv.org) <br />
              Student Coordinator: Anthony Guerra (anthony@codergv.org) <br />
              <MarginTop>
                We operate with support from Code#RGV, which is a non-profit run
                from McAllen, Texas. They allow us to function as an independent
                group, but can use their branding and resources like slack
                channel, website, etc. We have a core team with strong
                technology experience across several domains (health technology,
                engineering, front-end dev., beginner, full-stack). We are
                missing financial skills in our core team, which will impact our
                ability to sustainably fund Code#RGV Brownsville.
              </MarginTop>
            </Answer>
          </Column>
        </Box>
        <Box>
          <Column>
            <Question>
              <strong>
                How will your core team share responsibility? <br />
              </strong>
              How often will your core team meet? How many hours a week does
              everyone have to volunteer? How will you make decisions?
            </Question>
            <Answer>
              The core team meets monthly to discuss the direction of Code#RGV
              Brownsville and project progress. This is in addition to the
              general meetings held on the first and third Tuesday of the month.
              We do not require minimum volunteer hours, but do ask that members
              volunteer a reasonable amount to help progress individual
              projects. We understand that everyone has busy lives, so while we
              don’t require that people finish the projects they begin, we ask
              that they give the projects a good faith effort.
            </Answer>
          </Column>
        </Box>
      </section>
    );
  }
}

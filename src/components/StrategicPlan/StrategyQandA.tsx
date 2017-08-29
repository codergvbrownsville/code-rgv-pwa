/**
 * Table for question and answer section of strategies
 */
import * as React from "react";
import { Title } from "./Title";
import { Box } from "./Box";
import { Column } from "./Column";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { MarginTop } from "./MarginTop";
import { TeamOrganization } from "./TeamOrganization";
import { PartnersMembers } from "./PartnersMembers";
import { FocusAlignmentImpact } from "./FocusAlignmentImpact";
import { Finance } from "./Finance";

interface Children<T> {
  children: T;
}

class Subtitle extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <div className="subtitle is-6">
        <span>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export class StrategyQandA extends React.PureComponent {
  public render() {
    const strategicPlanDoc = `https://docs.google.com/document/d/1TyuSg61mH8ttA8mTTyj8BxZ-n4OP_jfLz6gHsSAm_ug/edit?usp=sharing`;

    return (
      <MarginTop>
        <Title>Team Development</Title>
        <Subtitle>Describe the organization and team.</Subtitle>
        <TeamOrganization />
        <MarginTop>
          <Title>Partners and Members</Title>
          <Subtitle>Describe your partners and members.</Subtitle>
          <PartnersMembers />
        </MarginTop>
        <MarginTop>
          <Title>Programmatic Focus, Alignment, and Impack</Title>
          <Subtitle>
            Describe the work your Brigade will do and the impact it will have
            in your community.
          </Subtitle>
          <FocusAlignmentImpact />
        </MarginTop>
        <MarginTop>
          <Title>Financial Model &amp; Fund Development</Title>
          <Subtitle>
            Use these tools to identify how much your Brigade will need to
            fundraise in 2016.
          </Subtitle>
          <Finance />
        </MarginTop>
        <MarginTop>
          <a href={strategicPlanDoc} rel="noreference noreferer">
            Go to Strategic Plan Document
          </a>
        </MarginTop>
      </MarginTop>
    );
  }
}

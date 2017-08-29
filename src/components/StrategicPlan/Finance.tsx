/**
 * Strategic component that contains
 * Finance Model & Fund Development
 */
import * as React from "react";
import { Box } from "./Box";
import { Column } from "./Column";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { MarginTop } from "./MarginTop";

class OrderedList extends React.PureComponent {
  public render() {
    return (
      <div className="content">
        <ol>
          {this.props.children}
        </ol>
      </div>
    );
  }
}

class Item extends React.PureComponent {
  public render() {
    return (
      <li>
        {this.props.children}
      </li>
    );
  }
}

export class Finance extends React.PureComponent {
  public render() {
    return (
      <section>
        <Box>
          <Column>
            <Question>
              <strong>What are your projected costs for 2016?</strong>
            </Question>
            <Answer>
              Use this budget template to document your costs.
              <MarginTop>
                You’ve likely identified most of your events and project costs
                in your projects and events spreadsheet. Transfer those to your
                budget spreadsheet.
              </MarginTop>
              <MarginTop>
                Now think through any fixed costs you’ll have throughout the
                year. These might include venue rental for hack night, hardware,
                etc.
              </MarginTop>
            </Answer>
          </Column>
        </Box>
        <Box>
          <Column>
            <Question>
              <strong>
                Are there any other fundraising strategies you’ll use that are
                not tied to projects or events?
              </strong>
              <OrderedList>
                <Item>Crowdfunding? If so, how will you execute?</Item>
                <Item>
                  Individual giving campaign? If so, how will you execute?
                </Item>
                <Item>Organizational sponsorship? If so, what / how?</Item>
              </OrderedList>
            </Question>
            <Answer />
          </Column>
        </Box>
      </section>
    );
  }
}

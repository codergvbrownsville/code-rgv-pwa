/**
 * Component rendering Events Agenda
 */
import * as React from "react";
import { PageTitle } from "../PageTitle/PageTitle";
import { BackgroundSlice } from "../BackgroundSlice/BackgroundSlice";
import { Container } from "../Container/Container";
import { List, Item } from "../List";
import { Content } from "../Content";

type Children<A> = {
  children: A;
};

class Paragraph extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <p className="subtitle is-5">
        {this.props.children}
      </p>
    );
  }
}

class BoldText extends React.PureComponent<Children<string>> {
  public render() {
    return (
      <h1 className="title is-5">
        <strong>
          {this.props.children}
        </strong>
      </h1>
    );
  }
}

export class Agenda extends React.PureComponent {
  public render() {
    return (
      <span>
        <BackgroundSlice>
          <PageTitle>What happens at a Meetup?</PageTitle>
        </BackgroundSlice>
        <Container>
          <Paragraph>
            The Code#RGV Brownsville: Meetup starts every first and third
            Tuesday at 7:00 pm. We meet at The WorkPub on 847 East Elizabeth
            Street. The event is free and open to anyone, especially folks who
            aren’t programmers.
          </Paragraph>
          <Content>
            <List>
              <Item>
                <BoldText>6:30 pm – Get Settled</BoldText>
              </Item>
              <List>
                <Item>
                  <Paragraph>
                    Free food and drinks are always provided at our Meetups.
                    Come around 6:30 pm to get settled and grab a drink and a
                    slice of pizza, wings, sandwich or wrap. We try to always
                    have healthy options available.
                  </Paragraph>
                </Item>
              </List>
            </List>
            <List>
              <Item>
                <BoldText>
                  7:00 pm – Welcome and Presentation + Q&amp;A
                </BoldText>
              </Item>
              <List>
                <Item>
                  We officially start at 7:00 pm with a brief presentation
                  followed by a question/answer session. Anyone can propose a
                  talk. Let us know if you have something to say!
                </Item>
              </List>
            </List>
            <List>
              <Item>
                <BoldText>7:30 pm - Introductions</BoldText>
              </Item>
              <List>
                <Item>
                  Everyone in the room introduces themselves and tells the group
                  why they’re at the Meetup.
                </Item>
              </List>
            </List>
            <List>
              <Item>
                <BoldText>7:45 pm – Announcements</BoldText>
              </Item>
              <List>
                <Item>
                  In the announcements section, we encourage folks to introduce
                  other events, mention newsworthy articles, and
                  technology-related job announcements. We record these
                  announcements in our weekly meeting notes and agenda Google
                  Doc.
                </Item>
              </List>
            </List>
            <List>
              <Item>
                <BoldText>
                  8:00 pm – 10:00 pm - Open Social + Working Session
                </BoldText>
              </Item>
              <List>
                <Item>
                  At this point, the event switches to an open social + working
                  session. People are invited to break off into groups and work
                  on projects, or join one of our classes hosted by members of
                  Code#RGV: Brownsville. Want to host a class? Tell us!
                </Item>
              </List>
            </List>
            <List>
              <Item>
                <BoldText>10:00 pm - Move to El Hueso de Fraile</BoldText>
              </Item>
              <List>
                <Item>
                  At this point, there’s usually a tenacious group of folks that
                  migrate next door to El Hueso de Fraile to continue working or
                  socializing.
                </Item>
              </List>
            </List>
          </Content>
        </Container>
      </span>
    );
  }
}

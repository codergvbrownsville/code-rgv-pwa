/**
 * Code of Conduct sub route
 */
import * as React from "react";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <div className="column is-mobile">
          <div style={{ marginBottom: "20px" }}>
            <h1 className="title is-3">CodeRGV:Brownsville</h1>
            <p className="subtitle is-5">
              All members of CodeRGV:Brownsville are required to agree with the
              following code of conduct. Cooperation with this Code of Conduct
              from all participants helps to ensure a safe environment for all
              attendees. This Code of Conduct applies to all of our events.
            </p>
            <p className="subtitle is-5">
              <i>
                tl;dr: Don't be a jerk, or you can't play on the playground.
              </i>
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h1 className="title is-3">The Brief Version</h1>
            <p className="subtitle is-5">
              CodeRGV:Brownsville is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, age,
              sexual orientation, disability, physical appearance, body size,
              race, or religion (or lack thereof). We do not tolerate harassment
              of attendees in any form. Sexual language and imagery is not
              appropriate for any venue, including talks, workshops, parties,
              Twitter and other online media. Attendees violating this code may
              be asked to leave at the discretion of the Norfolk.js organizers.
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h1 className="title is-3">The Much Less Brief Version</h1>
            <p className="subtitle is-5">
              Harassment includes offensive verbal comments related to gender,
              age, sexual orientation, disability, physical appearance, body
              size, race, religion, sexual images in public spaces, deliberate
              intimidation, stalking, following, harassing photography or
              recording, sustained disruption of talks or other events,
              inappropriate physical contact, and unwelcome sexual attention.
            </p>
            <p className="subtitle is-5">
              Participants asked to stop any harassing behavior are expected to
              comply immediately.
            </p>
            <p className="subtitle is-5">
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualized images, activities,
              or other material.
            </p>
            <p className="subtitle is-5">
              If a participant engages in harassing behavior, organizers may
              take any action they deem appropriate, including warning the
              offender or expulsion from the event.
            </p>
            <p className="subtitle is-5">
              We expect participants to follow these rules at meeting and
              workshop venues and CodeRGV:Brownsville-related social events.
            </p>
          </div>
          <div>
            <h1 className="title is-3">Need Help?</h1>
            <p className="subtitle is-5">
              Feel free to contact any of the organizers.
            </p>
            <p className="subtitle is-5">
              Adapted from: <a href="">Conference Code of Conduct</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

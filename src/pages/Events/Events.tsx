/**
 * Component rendering the events page
 */
import * as React from "react";
import { Agenda, BackgroundSlice } from "../../components";
export class Events extends React.Component {
  public render() {
    return (
      <BackgroundSlice>
        <Agenda />
      </BackgroundSlice>
    );
  }
}

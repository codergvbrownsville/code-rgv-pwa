/**
 * Component rendering the events page
 */
import * as React from "react";
import { Agenda, BackgroundSlice } from "../../components";

type Props = {
  location: string;
};

export default class Events extends React.Component<Props> {
  public render() {
    return (
      <BackgroundSlice>
        <Agenda />
      </BackgroundSlice>
    );
  }
}

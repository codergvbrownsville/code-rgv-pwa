/**
 * Projects page
 */
import * as React from "react";
import { PageTitle, BackgroundSlice } from "../../components";

type Props = {
  location: string;
};

export default class Projects extends React.Component<Props> {
  public render() {
    return (
      <BackgroundSlice>
        <PageTitle>Projects</PageTitle>
      </BackgroundSlice>
    );
  }
}

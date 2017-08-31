/**
 * About Title Component
 */
import * as React from "react";
import { BackgroundSlice } from "../BackgroundSlice/BackgroundSlice";
import { PageTitle } from "../PageTitle/PageTitle";

export class AboutBanner extends React.Component {
  public render() {
    return (
      <PageTitle>
        {this.props.children}
      </PageTitle>
    );
  }
}

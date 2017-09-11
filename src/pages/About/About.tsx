/**
 * About Page
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { fromJS, Map, List, Record } from "immutable";
import { map, tap, identity } from "ramda";
import * as L from "ramda-lens";
import * as R from "ramda";
import { immLens } from "../../utils";
import { AboutBanner, BackgroundSlice } from "../../components";

interface LocationTitle extends Map<string, string> {
  location: string;
  title: string;
}

type PropsLocation = {
  location: string;
};

// tslint:disable-next-line:no-default-export
export default class About extends React.PureComponent<PropsLocation, {}> {
  private titleWithLocation(): List<LocationTitle> {
    return fromJS([
      {
        location: "/about/about-us",
        title: "We Are CodeRGV:Brownsville"
      },
      {
        location: "/about/charter",
        title: "Charter"
      },
      {
        location: "/about/code-of-conduct",
        title: "Code Of Conduct"
      },
      {
        location: "/about/strategic-plan",
        title: "Strategic Plan"
      }
    ]);
  }

  private isSameLocation(p: LocationTitle, c: LocationTitle): boolean {
    const location = immLens("location");
    const viewLocation = L.view(location);
    return viewLocation(p) === viewLocation(c);
  }

  private findIndex(list: List<any>, p: PropsLocation): number {
    return list.findIndex((a: LocationTitle) =>
      this.isSameLocation(a, fromJS(p))
    );
  }

  private headerTitle(): string {
    return this.titleWithLocation().getIn([
      this.findIndex(this.titleWithLocation(), this.props),
      "title"
    ]);
  }
  public render() {
    return (
      <BackgroundSlice>
        <AboutBanner>
          {this.headerTitle()}
        </AboutBanner>
      </BackgroundSlice>
    );
  }
}

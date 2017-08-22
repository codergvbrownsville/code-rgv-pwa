/**
 * About Page
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { fromJS, Map, List } from "immutable";
import { map, tap, identity } from "ramda";
import * as L from "ramda-lens";
import * as R from "ramda";
import { immLens, log } from "../../utils";
import { AboutBanner } from "../../components";

interface LocationTitle extends Map<any, any> {
  location: string;
  title: string;
}

type PropsLocation = React.Props<{ location: string }>;

// tslint:disable-next-line:no-default-export
export default class About extends React.PureComponent<any, any> {
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
      //{AboutBanner.fold({ headerText: this.headerTitle() })}
      <div />
    );
  }
}

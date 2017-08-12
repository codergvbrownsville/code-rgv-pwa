/**
 * About Page
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { fromJS, Map, List } from "immutable";
import { map, tap, identity } from "ramda";
import * as L from "ramda-lens";
import { immLens, log } from "../../utils";
import { Title, Header } from "../../components";

// tslint:disable-next-line:no-default-export
export default class About extends React.PureComponent<any, any> {
  private titleWithLocation(): List<Map<string, string>> {
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

  public isSameId(p: Map<any, any>, c: Map<any, any>): boolean {
    const id = immLens("location");
    const viewId = L.view(id);
    return viewId(p) === viewId(c);
  }

  public findIndex(list: List<any>, p: React.Props<any>): number {
    return list.findIndex((a: Map<any, any>) => this.isSameId(a, fromJS(p)));
  }

  public headerTitle(): string {
    return this.titleWithLocation().getIn([
      this.findIndex(this.titleWithLocation(), this.props),
      "title"
    ]);
  }

  public render() {
    return (
      <div>
        {Header.map(map(title => Title.fold({ title })))
          .run({ title: this.headerTitle() })
          .fold()}
      </div>
    );
  }
}

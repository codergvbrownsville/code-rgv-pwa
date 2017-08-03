/**
 * About Page
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { fromJS, Map, List } from "immutable";
import * as L from "partial.lenses";
import { immLens, log } from "../../utils";

// tslint:disable-next-line:no-default-export
export default class About extends React.PureComponent<any, any> {
  public aboutHeaderTitle(): List<any> {
    return fromJS([
      {
        location: "/about/about-us",
        title: "We Are CodeRgv"
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
    const viewId = L.get(id);
    return viewId(p) === viewId(c);
  }

  public findIndex(list: List<any>, p: React.Props<any>) {
    return list.findIndex((a: Map<any, any>) => this.isSameId(a, fromJS(p)));
  }

  public render() {
    const backgroundSlice = {
      backgroundColor: "#00b3b3",
      height: "200px",
      marginBottom: "30px"
    };
    return (
      <div style={backgroundSlice}>
        <h1
          style={{ color: "#FFAA00", textAlign: "center", paddingTop: "70px" }}
          className="title is-1"
        >
          {this.aboutHeaderTitle().getIn([
            this.findIndex(this.aboutHeaderTitle(), this.props),
            "title"
          ])}
        </h1>
      </div>
    );
  }
}

/**
 * Home Page
 */
import * as React from "react";
import { Nav } from "../../components";

export class Home extends React.PureComponent {
  public render() {
    return (
      <div>
        <Nav />
        <span className="icon">
          <i className="fa fa-home" />
        </span>
      </div>
    );
  }
}

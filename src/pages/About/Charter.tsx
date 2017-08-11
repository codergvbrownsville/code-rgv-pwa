/**
 * Charter sub route
 */
import * as React from "react";
import { CharterTitle, MarginBottom } from "../../components";

export class Charter extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <h1 className="subtitle is-3 has-text-centered">
          {CharterTitle}
        </h1>
      </div>
    );
  }
}

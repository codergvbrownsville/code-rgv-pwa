/**
 * Strategy Plan sub route
 */
import * as React from "react";
import { ExecutiveSummary } from "../../components";

export class StrategyPlan extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <h1 className="subtitle is-3 has-text-centered">
          Code#RGV Brownsville: Brigade Strategic Plan
        </h1>
        <ExecutiveSummary />
      </div>
    );
  }
}

/**
 * Strategy Plan sub route
 */
import * as React from "react";
import { ExecutiveSummary, StrategyQandA, Container } from "../../components";

export class StrategyPlan extends React.PureComponent {
  public render() {
    return (
      <Container>
        <ExecutiveSummary />
        <StrategyQandA />
      </Container>
    );
  }
}

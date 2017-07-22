/**
 * Applicaion Container
 */
import * as React from "react";

export class AppContainer extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

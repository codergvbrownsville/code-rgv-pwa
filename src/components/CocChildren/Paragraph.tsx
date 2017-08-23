/**
 * Generic Paragraph component
 * @param {paragraph: string[]}
 */
import * as React from "react";
import { v4 } from "uuid";

type IParagraph = {
  paragraph: string[];
};

export class Paragraph extends React.PureComponent<IParagraph> {
  public render() {
    return (
      <div>
        {this.props.paragraph.map((content: string) =>
          <p className="subtitle is-5" key={v4()}>
            {content}
          </p>
        )}
      </div>
    );
  }
}

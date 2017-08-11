/**
 * Code of Conduct sub route
 */
import * as React from "react";
import {
  FirstParagraph,
  SecondParagraph,
  ThirdParagraph,
  FourthParagraph,
  MarginBottom,
  TitleThree
} from "../../components";
import { tap, identity } from "ramda";
import { Reader } from "ramda-fantasy";
const log = tap(console.log.bind(console));

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <div className="column is-mobile">
          <div style={{ marginBottom: "20px" }}>
            {FirstParagraph.title}
            {FirstParagraph.subtitle1}
            {FirstParagraph.subtitle2}
          </div>
          <div style={{ marginBottom: "20px" }}>
            {SecondParagraph.title}
            {SecondParagraph.subtitle}
          </div>
          {log(MarginBottom)}
          <div style={{ marginBottom: "20px" }}>
            {ThirdParagraph.title}
            {ThirdParagraph.subtitle1}
            {ThirdParagraph.subtitle2}
            {ThirdParagraph.subtitle3}
            {ThirdParagraph.subtitle4}
            {ThirdParagraph.subtitle5}
          </div>
          <div>
            {FourthParagraph.title}
            {FourthParagraph.subtitle1}
            {FourthParagraph.subtitle2}
          </div>
        </div>
      </div>
    );
  }
}

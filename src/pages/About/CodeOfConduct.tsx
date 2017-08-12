/**
 * Code of Conduct sub route
 */
import * as React from "react";
import {
  FirstParagraphTitle,
  FirstParagraphBody,
  SecondParagraphTitle,
  SecondParagraphBody,
  ThirdParagraphTitle,
  ThirdParagraphBody,
  FourthParagraphTitle,
  FourthParagraphBody
} from "../../components";
import { tap, identity, map } from "ramda";
import { Reader } from "ramda-fantasy";

export class CodeOfConduct extends React.PureComponent {
  public render() {
    return (
      <div className="container">
        <div className="column is-mobile">
          {FirstParagraphTitle}
          {FirstParagraphBody}
          {SecondParagraphTitle}
          {SecondParagraphBody}
          {ThirdParagraphTitle}
          {ThirdParagraphBody}
          {FourthParagraphTitle}
          {FourthParagraphBody}
        </div>
      </div>
    );
  }
}

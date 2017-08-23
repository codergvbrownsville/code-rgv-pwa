/**
 * Charter sub route
 */
import * as React from "react";
import {
  Container,
  CharterTitle,
  CharterFirst,
  CharterSecond,
  CharterThird,
  CharterFourth,
  CharterFifth,
  CharterSixth,
  CharterProgram
} from "../../components";

export class Charter extends React.PureComponent {
  public render() {
    return (
      <Container>
        <CharterTitle />
        <CharterFirst />
        <CharterSecond />
        <CharterThird />
        <CharterFourth />
        <CharterSixth />
        <CharterProgram />
      </Container>
    );
  }
}

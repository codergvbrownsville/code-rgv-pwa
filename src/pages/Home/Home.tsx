/**
 * Home Page
 */
import * as React from "react";
import { HomeBackground } from "../../components";
import * as codeRgvLogo from "../../assets/codergvb_logo.png";

type Props = {
  location: string;
};

export default class Home extends React.Component<Props> {
  public render() {
    const imgStyle = {
      display: "block",
      margin: "auto",
      width: "30%"
    };
    return (
      <HomeBackground>
        <img
          className="center"
          src={codeRgvLogo}
          alt="Code RGV Logo"
          style={imgStyle}
        />
      </HomeBackground>
    );
  }
}

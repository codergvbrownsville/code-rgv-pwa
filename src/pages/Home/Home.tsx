/**
 * Home Page
 */
import * as React from "react";
import { Nav } from "../../components";
import * as codeRgvLogo from "../../assets/codergvb_logo.png";

class HomeBackground extends React.Component {
  public render() {
    return (
      <div style={{ backgroundColor: "#00b3b3" }}>
        <figure className="image">
          {this.props.children}
        </figure>
      </div>
    );
  }
}

export class Home extends React.Component {
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

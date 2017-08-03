/**
 * Home Page
 */
import * as React from "react";
import { Nav } from "../../components";
import * as codeRgvLogo from "../../assets/codergvb_logo.png";

export class Home extends React.Component {
  public render() {
    const imgStyle = {
      display: "block",
      margin: "auto",
      width: "30%"
    };
    return (
      <div style={{ backgroundColor: "#00b3b3" }}>
        <figure className="image">
          <img
            className="center"
            src={codeRgvLogo}
            alt="Code RGV Logo"
            style={imgStyle}
          />
        </figure>
      </div>
    );
  }
}

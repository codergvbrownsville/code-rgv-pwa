/**
 * Home Page
 */
import * as React from "react";
import { Nav } from "../../components";
import * as codeRgvLogo from "../../assets/codergv_logo.jpg";

export class Home extends React.Component {
  public render() {
    const imgSize = {
      display: "block",
      margin: "auto",
      width: "60%"
    };
    return (
      <div>
        <figure className="image">
          <img
            className="center"
            src={codeRgvLogo}
            alt="Code RGV Logo"
            style={imgSize}
          />
        </figure>
      </div>
    );
  }
}

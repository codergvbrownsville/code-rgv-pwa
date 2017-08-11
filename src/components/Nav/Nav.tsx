/**
 * Navigation Component
 */
import * as React from "react";
import { Link } from "react-router-dom";
import * as bvilleLogo from "../../assets/bville_logo.png";
import { NavLinks } from "./NavLinks";

export class Nav extends React.PureComponent {
  public render() {
    return (
      <nav className="navbar" style={{ border: "1px solid #ffaa00" }}>
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={bvilleLogo} alt="brownsville logo" />
            <span className="title is-4">
              <strong>CodeRGV</strong>
            </span>
          </a>
          <div className="navbar-burger" data-target="codeRgvMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu" id="codeRgvMenu">
          <NavLinks />
          <div className="navbar-end">
            <a
              href="https://github.com/codergvbrownsville"
              className="navbar-item"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github" />
            </a>
            <a
              href="https://www.facebook.com/codergvbrownsville/"
              className="navbar-item"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
            <a
              href="https://codergv.herokuapp.com/"
              className="navbar-item"
              target="_blank"
              role="button"
              rel="noopener noreferrer"
            >
              <i className="fa fa-slack" aria-hidden="true" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

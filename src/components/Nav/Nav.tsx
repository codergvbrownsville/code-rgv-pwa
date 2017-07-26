/**
 * Navigation Component
 */
import * as React from "react";
import { Link } from "react-router-dom";

export class Nav extends React.PureComponent {
  public render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">
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
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/events" className="navbar-item">
              Events
            </Link>
            <Link to="/projects" className="navbar-item">
              Projects
            </Link>
            <Link to="/about" className="navbar-item">
              About
            </Link>
          </div>
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
          </div>
        </div>
      </nav>
    );
  }
}

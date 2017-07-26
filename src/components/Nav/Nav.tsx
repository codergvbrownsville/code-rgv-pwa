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
          <div className="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/" className="navbar-item">
              Events
            </Link>
            <Link to="/" className="navbar-item">
              Projects
            </Link>
            <Link to="/" className="navbar-item">
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

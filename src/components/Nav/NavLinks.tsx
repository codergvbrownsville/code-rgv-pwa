/**
 * Navigation Links
 */
import * as React from "react";
import { Link } from "react-router-dom";

export class NavLinks extends React.PureComponent {
  public render() {
    return (
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
        <div className="navbar-item has-dropdown is-hoverable">
          <Link to="/about/about-us" className="navbar-link is-active">
            About
          </Link>
          <div className="navbar-dropdown">
            <Link
              to="/about/about-us"
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              About Us
            </Link>
            <a
              href="https://github.com/CodeRGV/codeofconduct"
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Code Of Conduct
            </a>
            <Link
              to="/about/charter"
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Charter
            </Link>
            <Link
              to="/about/strategic-plan"
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Strategic Plan
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

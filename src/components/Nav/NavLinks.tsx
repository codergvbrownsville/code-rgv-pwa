/**
 * Navigation Links
 */
import * as React from "react";
import { Link } from "react-router-dom";

export class NavLinks extends React.PureComponent {
  public render() {
    return (
      <div>
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
          <Link to="/about/who-we-are" className="navbar-link is-active">
            About
          </Link>
          <div className="navbar-dropdown">
            <a
              href=""
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              About Us
            </a>
            <a
              href="https://github.com/CodeRGV/codeofconduct"
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Code Of Conduct
            </a>
            <a
              href=""
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Charter
            </a>
            <a
              href=""
              className="navbar-item"
              role="button"
              rel="nooopener noreferrer"
            >
              Strategic Plan
            </a>
          </div>
        </div>
      </div>
    );
  }
}

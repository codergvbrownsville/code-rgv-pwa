/**
 * Navigation Component
 */
import * as React from "react";
import { Link } from "react-router-dom";
import * as bvilleLogo from "../../assets/bville_logo.png";
import { NavLinks } from "./NavLinks";

class Navbar extends React.PureComponent {
  public render() {
    return (
      <nav className="navbar" style={{ border: "1px solid #ffaa00" }}>
        {this.props.children}
      </nav>
    );
  }
}

class NavbarBrand extends React.PureComponent {
  public render() {
    return (
      <div className="navbar-brand">
        {this.props.children}
      </div>
    );
  }
}

type NavbarItemProps = {
  href?: string;
};

class NavbarItem extends React.PureComponent<NavbarItemProps> {
  public render() {
    return (
      <a
        className="navbar-item"
        href={this.props.href}
        target="_blank"
        role="button"
        rel="noopener noreferrer"
      >
        {this.props.children}
      </a>
    );
  }
}

type NavbarMenuProps = {
  id: string;
};

class NavbarMenu extends React.PureComponent<NavbarMenuProps> {
  public render() {
    return (
      <div className="navbar-menu" id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

class NavbarEnd extends React.PureComponent {
  public render() {
    return (
      <div className="navbar-end">
        {this.props.children}
      </div>
    );
  }
}

type NavbarBurgerProps = {
  dataTarget: string;
};

class NavbarBurger extends React.PureComponent<NavbarBurgerProps> {
  public render() {
    return (
      <div className="navbar-burger" data-target={this.props.dataTarget}>
        {this.props.children}
      </div>
    );
  }
}

class Title extends React.PureComponent {
  public render() {
    return (
      <span className="title is-4">
        {this.props.children}
      </span>
    );
  }
}

export class Nav extends React.PureComponent {
  public render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <img src={bvilleLogo} alt="brownsville logo" />
            <Title>
              <strong>CodeRGV</strong>
            </Title>
          </NavbarItem>
          <NavbarBurger dataTarget={"codeRgvMenu"}>
            <span />
            <span />
            <span />
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu id={"codeRgvMenu"}>
          <NavLinks />
          <NavbarEnd>
            <NavbarItem href={"https://github.com/codergvbrownsville"}>
              <i className="fa fa-github" aria-hidden="true" />
            </NavbarItem>
            <NavbarItem href={"https://www.facebook.com/codergvbrownsville/"}>
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </NavbarItem>
            <NavbarItem href={"https://codergv.herokuapp.com/"}>
              <i className="fa fa-slack" aria-hidden="true" />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

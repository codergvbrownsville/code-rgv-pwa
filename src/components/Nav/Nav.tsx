/**
 * Navigation Component
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { equals } from "ramda";
import * as bvilleLogo from "../../assets/bville_logo.png";
import { NavLinks } from "./NavLinks";

type Props<T> = {
  children: T;
};

class Navbar extends React.PureComponent<Props<JSX.Element[]>> {
  public render() {
    return (
      <nav className="navbar" style={{ border: "1px solid #ffaa00" }}>
        {this.props.children}
      </nav>
    );
  }
}

class NavbarBrand extends React.PureComponent<Props<JSX.Element[]>> {
  public render() {
    return (
      <div className="navbar-brand">
        {this.props.children}
      </div>
    );
  }
}

type NavbarItemProps<T> = {
  href?: string;
  children: T;
};

class NavbarItem extends React.PureComponent<
  NavbarItemProps<JSX.Element[] | JSX.Element>
> {
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

class NavbarEnd extends React.PureComponent<Props<JSX.Element[]>> {
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

type NavbarBurgerState = {
  burgerClassName: string;
};

class NavbarBurger extends React.PureComponent<NavbarBurgerProps> {
  public state: NavbarBurgerState;

  constructor(props: NavbarBurgerProps) {
    super(props);
    this.state = {
      burgerClassName: ""
    };
  }

  public attachIsActiveClass = () =>
    this.setState((prev: NavbarBurgerState, curr: NavbarBurgerState) => ({
      burgerClassName: equals(prev.burgerClassName, "") ? "is-active" : ""
    }));

  public render() {
    return (
      <div
        className={`navbar-burger ${this.state.burgerClassName}`}
        data-target={this.props.dataTarget}
        role="button"
        onClick={this.attachIsActiveClass}
      >
        {this.props.children}
      </div>
    );
  }
}

class Title extends React.PureComponent<Props<string>> {
  public render() {
    return (
      <span className="title is-4">
        <strong>
          {this.props.children}
        </strong>
      </span>
    );
  }
}

type FontAwesomeIconProps = {
  icon: string;
};

class FontAwesomeIcon extends React.PureComponent<FontAwesomeIconProps> {
  public render() {
    return <i className={`fa fa-${this.props.icon}`} aria-hidden="true" />;
  }
}

export class Nav extends React.PureComponent {
  public render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <img src={bvilleLogo} alt="brownsville logo" />
            <Title>CodeRGV</Title>
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
              <FontAwesomeIcon icon={"github"} />
            </NavbarItem>
            <NavbarItem href={"https://www.facebook.com/codergvbrownsville/"}>
              <FontAwesomeIcon icon={"facebook-square"} />
            </NavbarItem>
            <NavbarItem href={"https://codergv.herokuapp.com/"}>
              <FontAwesomeIcon icon={"slack"} />
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    );
  }
}

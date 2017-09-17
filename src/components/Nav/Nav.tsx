/**
 * Navigation Component
 */
import * as React from "react";
import { Link } from "react-router-dom";
import { equals } from "ramda";
import * as bvilleLogo from "../../assets/bville_logo.png";
import { TOGGLE_NAVBAR_IS_BURGER_ACTIVE } from "../../action-creators";
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
  isActiveClass: boolean;
};

class NavbarMenu extends React.PureComponent<NavbarMenuProps> {
  public render() {
    const isActive = this.props.isActiveClass ? "is-active" : "";
    return (
      <div className={`navbar-menu ${isActive}`} id={this.props.id}>
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
  toggleIsActive(a: "TOGGLE_NAVBAR_IS_BURGER_ACTIVE"): void;
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

  public attachIsActiveClass = () => {
    this.setState((prev: NavbarBurgerState, curr: NavbarBurgerState) => ({
      burgerClassName: equals(prev.burgerClassName, "") ? "is-active" : ""
    }));
    this.props.toggleIsActive(TOGGLE_NAVBAR_IS_BURGER_ACTIVE);
  };

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

interface NavProps {
  isBurgerActive: boolean;
  dispatch(a: string): void;
}

export class Nav extends React.PureComponent<NavProps> {
  public render() {
    return (
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <img src={bvilleLogo} alt="brownsville logo" />
            <Title>CodeRGV</Title>
          </NavbarItem>
          <NavbarBurger
            dataTarget={"codeRgvMenu"}
            toggleIsActive={this.props.dispatch}
          >
            <span />
            <span />
            <span />
          </NavbarBurger>
        </NavbarBrand>
        <NavbarMenu
          id={"codeRgvMenu"}
          isActiveClass={this.props.isBurgerActive}
        >
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

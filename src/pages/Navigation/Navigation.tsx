/**
 * Container for navigation component
 */
import * as React from "react";
import { Map } from "immutable";
import { connect } from "react-redux";
import { Nav } from "../../components";
import { State, BurgerStatus } from "../../types";

interface NavigationProps {
  state: BurgerStatus;
  dispatch(a: any): any;
}

export class Navigation extends React.PureComponent<NavigationProps> {
  private dispatchAction = (type: string) => this.props.dispatch({ type });

  public render() {
    return (
      <Nav
        dispatch={this.dispatchAction}
        isBurgerActive={this.props.state.get("isBurgerActive")}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  state: state.ui.navigation
});

export const NavContainer = connect(mapStateToProps)(Navigation as any);

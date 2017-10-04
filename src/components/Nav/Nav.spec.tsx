/**
 * Navbar test
 */
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { Nav } from "./Nav";

test("Navbar exists", () => {
  const isBurgerActive = true;
  const dispatch = () => console.info("test");
  const component = renderer.create(
    <MemoryRouter>
      <Nav isBurgerActive dispatch={dispatch} />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

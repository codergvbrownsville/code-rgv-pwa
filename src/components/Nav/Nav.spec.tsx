/**
 * Navbar test
 */
import { shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { Nav } from "./Nav";

test("Navbar exists", () => {
  const component = renderer.create(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

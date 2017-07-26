/**
 * Navbar test
 */
import { shallow } from "enzyme";
import * as React from "react";
import { Nav } from "./Nav";

test("Navbar exists", () => {
  const component = shallow(<Nav />);
  expect(component.length).toEqual(1);
});

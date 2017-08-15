/**
 * About Background slice test
 */
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { AboutBackgroundSlice } from "./AboutBackgroundSlice";

test("About Background slice", () => {
  const component = renderer.create(
    AboutBackgroundSlice.fold({ t: { title: "test" } })
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

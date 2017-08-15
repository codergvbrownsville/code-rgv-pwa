/**
 * About Banner test
 */
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { AboutBanner } from "./AboutBanner";

test("About Banner", () => {
  const component = renderer.create(AboutBanner.fold({ text: "test" }));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

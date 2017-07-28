/**
 * AppContainer test
 */
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { AppContainer } from "./AppContainer";

test("AppContainer snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <AppContainer />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("AppContainer", () => {
  const component = shallow(<AppContainer />);
  expect(component.find("div").length).toEqual(2);
});

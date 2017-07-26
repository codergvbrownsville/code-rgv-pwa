/**
 * AppContainer test
 */
import { shallow } from "enzyme";
import * as React from "react";
import { AppContainer } from "./AppContainer";

test("AppContainer exists", () => {
  const component = shallow(<AppContainer />);
  expect(component.length).toEqual(1);
});

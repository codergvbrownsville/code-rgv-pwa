/**
 * Events Listing test
 */
import { MemoryRouter } from "react-router-dom";
import { shallow, mount, configure } from "enzyme";
import * as renderer from "react-test-renderer";
import * as React from "react";
import { List, fromJS } from "immutable";
import { EventsListing } from "./EventsListing";
import { events } from "./events";
import * as ReactSixteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactSixteenAdapter() });

test("EventsListing snapshot", () => {
  const component = renderer.create(
    <MemoryRouter>
      <EventsListing events={List()} />
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("<EventsListing /> when it events list is undefined", () => {
  const component = mount(<EventsListing events={undefined} />);
  expect(component.length).toEqual(1);
  expect(component.find("table").length).toEqual(1);
});

test("<EventsListing /> before state hydration", () => {
  const component = mount(<EventsListing events={fromJS([{}])} />);
  expect(component.length).toEqual(1);
  expect(component.find("table").length).toEqual(1);
  expect(component.find("tr").length).toEqual(2);
});

test("<EventsListing /> when state has been hydrated", () => {
  const component = mount(<EventsListing events={fromJS(events)} />);
  expect(component.length).toEqual(1);
  expect(component.find("table").length).toEqual(1);
  expect(component.find("tr").length).toEqual(35);
});

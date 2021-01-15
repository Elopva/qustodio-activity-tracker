import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"; //At this time we do not have oficial support for react 17

import ActivityList from './ActivityList';
import ActivityItem from '../ActivityItem/ActivityItem';
import Button from '../../../shared/components/UIElements/Button/Button';

configure({ adapter: new Adapter() });

describe("<ActivityList />", () => {
  let wrapper;
  let mntWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ActivityList
        activities={[
          {
            id: "1",
            name: "Netflix & Chill",
            friendly: true,
            times: 50,
          },
        ]}
      />
    );
    mntWrapper = mount(
      <ActivityList
        activities={[
          {
            id: "1",
            name: "Netflix & Chill",
            friendly: true,
            times: 50,
          },
        ]}
      />
    );
  });

  it("Should show the activities", () => {
    expect(wrapper.find(ActivityItem)).toHaveLength(2);  
  });

   it("Should show the button when one element is selected", () => {
     
      expect(mntWrapper.find("input[type='checkbox']")).toHaveLength(1);
      mntWrapper.find("input[type='checkbox']").simulate('change');
      expect(mntWrapper.find("button")).toHaveLength(1);
  }); 

  it("Should hide the button when no checkbox is selected", () => {
    expect(mntWrapper.find("input[type='checkbox']")).toHaveLength(1);
    mntWrapper.find("input[type='checkbox']").simulate("change");
    expect(mntWrapper.find("button")).toHaveLength(1);
    mntWrapper.find("input[type='checkbox']").simulate("change");
    expect(mntWrapper.find("button")).toHaveLength(0);
  });

  it("Should increment value when action is performed", () => {
    expect(mntWrapper.find("input[type='checkbox']")).toHaveLength(1);
    mntWrapper.find("input[type='checkbox']").simulate("change");
    expect(mntWrapper.find("button")).toHaveLength(1);
    mntWrapper.find("button").simulate("click");
    mntWrapper.update();
    expect(mntWrapper.props().activities[0].times).toBe(50);
  });
});
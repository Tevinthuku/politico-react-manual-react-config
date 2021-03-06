import React from "react";

import { shallow } from "enzyme";
import { Input } from "../";

describe("<Input />", () => {
  test("should render input without error", () => {
    const wrapper = shallow(<Input />);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
  });
  test("should spread all props to the component", () => {
    const wrapper = shallow(<Input placeholder="email" />);
    expect(wrapper.props().placeholder).toBe("email");
  });
});

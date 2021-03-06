import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Routes from "./routes";

describe("App", () => {
  test("should render without error", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Routes />)).toBe(true);
  });
});

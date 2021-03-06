import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import { add } from "./App";

test("Should render title in app component", () => {
  const appComponent = render(<App />);

  expect(appComponent.container).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );
});

  // method 2
test("Should render title", () => {
  const appComponent = render(<App />);
  const element = appComponent.getByText(
    "Component testing is done with react-testing-library"
  );
  expect(element).toBeDefined();
});

test("Should add numbers correctly", () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

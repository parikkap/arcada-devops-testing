import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Should render title in app component", () => {
  const appComponent = render(<App />);

  expect(appComponent.container).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );
});

test("Should render title", () => {
  const appComponent = render(<App />);

  // method 2
  const element = appComponent.getByText(
    "Component testing is done with react-testing-library"
  );
  expect(element).toBeDefined();
});

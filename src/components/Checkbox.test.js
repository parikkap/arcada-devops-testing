import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Checkbox from "./Checkbox";


it("CheckboxWithLabel changes the text after click", () => {
  const { queryByLabelText, getByLabelText } = render(
    <Checkbox labelOn="On" labelOff="Off" />
  );

  expect(queryByLabelText(/Off/i)).toBeTruthy();

  fireEvent.click(queryByLabelText(/Off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});

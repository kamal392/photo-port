import React from "react";
import { render, cleanup } from "@testing-library/react/";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("ContactForm", () => {
  it("render", () => {
    render(<ContactForm />);
  });

  // snapshot testing

  it("renders", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Testing if h1 tag is rendering
it("render", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
});

// Testing if submit button is rendering properly
it("render", () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId("sub-btn")).toHaveTextContent("Submit");
});

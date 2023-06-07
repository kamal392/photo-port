// importing react for proper rendering of Nav Component
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

// cleanup remove component from browser
afterEach(cleanup);

// describe function takes 2 arguments first the name of the component needs to be tested
// and second is callback function.

describe("Nav component", () => {
  // baseline test
  it("render", () => {
    render(<Nav />);
  });

  // snapshot test
  it("match snapshot", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison

    expect(asFragment()).toMatchSnapshot();
  });
});

// we can test each jsx element we have inside Nav component.
// Create a test for Emoji visibility

describe("emoji is visible", () => {
  it("insert emoji into h2", () => {
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// create a test for link visibility.
describe("links are visible", () => {
  it("insert text into the links", () => {
    // Arrange
    const { getByTestId } = render(<Nav />);
    // Assert
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

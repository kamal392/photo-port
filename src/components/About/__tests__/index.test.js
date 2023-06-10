// we need react to enable the components to function properly so we can test them.
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// This will ensure that we won't have any leftover memory data.
afterEach(cleanup);

// using describe function to declare the component we are testing.
// describe function take 2 parameter  first the name of the component
// you want to test and it takes callback function .
describe("About component", () => {
  //  First test
  // Here we are using it() function which take 2 arguments. in first its a string
  // declares what is been tested and second takes a callback function runs test.

  it("render", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    // asFragment functions returns a snapshot of About component.
    const { asFragment } = render(<About />);

    // we use expect function to compare whether the expected and actual outcomes match.
    expect(asFragment()).toMatchSnapshot();
  });
});

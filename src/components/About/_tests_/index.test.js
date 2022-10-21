import React from "react";

// we need react to enable the components to function properly so that we can test them.

import {render, cleanup} from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from "..";

// This will ensure that after each test we don't have any leftover memory to give us false data.

afterEach(cleanup);

// describe function to declare the component we are testing

describe('About component',()=>{
//   First Test(baseline to verify that the component is rendering)
it('render',()=>{
    render(<About/>);

});
// Second Test
it("matches snapshot DOM node structure", () => {
  // render About
  const {asFragment} = render(<About/>);
  expect(asFragment()).toMatchSnapshot();
});

})
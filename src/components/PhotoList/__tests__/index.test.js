import React from "react";
import {cleanup ,render}from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from "..";

afterEach(cleanup)
// first test (rendering test)
describe('photoList is rendering',()=>{
    it('render',()=>{
        render(<PhotoList/>);
    });

// second test (snapshot test)
it('render',()=>{
    const {asFragment} = render(<PhotoList/>)
    expect(asFragment()).toMatchSnapshot()
});
});


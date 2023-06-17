import React from "react";
import {render ,cleanup}from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..'


// // the gallery component will also require a prop of currentCategory
const portrait = {name:"portraits",description:"Portraits of people in my life"};

afterEach(cleanup);

// describe function takes 2 arguments first is the name of the component needs to be tested
// and second one is the call back function.

describe('Gallery is rendering',()=>{
    // first test
    it('render',()=>{
        // render(<Gallery currentCategory ={portrait}/>)
        render(<Gallery currentCategory={portrait} />);
    });

    // second test
    it('matches snapshot',()=>{
        // the render value will be stored in asFragment
        const{asFragment} =render(<Gallery currentCategory={portrait}/>)
        expect(asFragment()).toMatchSnapshot()
        
    })
});




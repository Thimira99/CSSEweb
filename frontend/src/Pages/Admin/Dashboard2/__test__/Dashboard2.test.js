import React from 'react'; 
import ReactDOM from 'react-dom';
import dashboard2 from './../Dashboard2';
import { BrowserRouter } from 'react-router-dom';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


import renderer from 'react-test-renderer';

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
    <BrowserRouter>
     <dashboard2></dashboard2>
     </BrowserRouter>, div)
})

it("renders Cards correctly", () => {
    const {getByTestId} = render(<BrowserRouter><dashboard2><div></div></dashboard2></BrowserRouter>)
    expect(getByTestId('cards')).toHaveTextContent("")
})

// it("renders Cards correctly", () => {
//     const {getByTestId} = render(<BrowserRouter><Cards><div><h1>"DISPLAY DASHBOARD"</h1></div></Cards></BrowserRouter>)
//     expect(getByTestId('cards')).toHaveTextContent("DASHBOARD")
// })

//This will convert this to like a virtual DOM object
it("matches snapshot", () =>{
    const tree= renderer.create(<BrowserRouter><dashboard2><div> </div></dashboard2></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot(); 
    //It looks for folder called snapshot
} )
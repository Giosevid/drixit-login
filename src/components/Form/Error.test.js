import {render} from "@testing-library/react";
import React from "react";
import Error from "./Error";

describe('test component <Error/> ', () => {
  test('render without crashing', () => {
    const { asFragment } = render(<Error/>)
    expect(asFragment()).toMatchSnapshot();
  })
})

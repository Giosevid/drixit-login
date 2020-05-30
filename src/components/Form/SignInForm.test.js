import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SignInForm from "./SignInForm";

describe('test component <SignInForm/> ', () => {
  test('render without crashing', () => {
    const { asFragment } = render(<SignInForm/>)
    expect(asFragment()).toMatchSnapshot();
  })
})

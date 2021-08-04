import { render } from '@testing-library/react'
import React from 'react'
import Login from './login'

describe('Login Component', () => {
  test('should start with initial state', () => {
    /* Test error Wrap, message error and spinner */
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    /* Submit button disabled */
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})

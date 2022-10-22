import React from 'react'
import { describe, test, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'

import Home from './'
import { TEXT, ARIA_LABEL } from './const'

describe('Home', () => {
  test('正常に描画される', () => {
    render(<Home />)
    const element = screen.getByLabelText(ARIA_LABEL.HOME_PAGE)
    expect(element.textContent).toEqual(TEXT.TITLE)
  })
})

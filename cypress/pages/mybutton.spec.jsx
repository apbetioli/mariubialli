import React from 'react'
import { mount } from '@cypress/react'
import MyButton from '../../src/components/MyButton'
import { ThemeProvider } from '@emotion/react'
import theme from "../../src/lib/theme";

it('Renders my custom button', () => {
  mount(
    <ThemeProvider theme={theme}>
      <MyButton data-test='mybutton'>Click me</MyButton>
    </ThemeProvider>
  )
  cy.getBySel('mybutton').contains('Click me')
})
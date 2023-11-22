import React from 'react'
import { CatalogoPage } from './CatalogoPage'

describe('<CatalogoPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CatalogoPage />)
  })
})
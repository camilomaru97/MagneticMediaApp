import React from 'react'
import { AddIronLlegadaModal } from './AddIronLlegadaModal'

describe('<AddIronLlegadaModal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddIronLlegadaModal />)
  })
})
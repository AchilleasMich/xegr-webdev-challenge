import React from 'react'
import Properties from '../../src/components/Properties'

describe('<Properties />', () => {
  it('renders properties correctly', () => {
    cy.intercept('GET', '/properties', { fixture: 'properties.json' }).as('getProperties')
    cy.mount(<Properties />)
    cy.get('.css-gmuwbf > .chakra-heading').should('contain', 'List of Properties')
    cy.wait(['@getProperties'])

    cy.get('.chakra-card__header > .chakra-heading').should('contain', 'Athina Home')
    cy.get(':nth-child(2) > .chakra-card__header > .chakra-heading').should('contain', 'Athina Home 2')
  })


  it('renders without properties correctly', () => {
    cy.intercept('GET', '/properties', { fixture: 'empty_properties.json' }).as('getProperties')
    cy.mount(<Properties />)
    cy.get('.css-gmuwbf > .chakra-heading').should('contain', 'List of Properties')
    cy.wait(['@getProperties'])

    cy.get('.css-qki6w2 > .chakra-heading').should('contain', 'No Results Found');
  })
})
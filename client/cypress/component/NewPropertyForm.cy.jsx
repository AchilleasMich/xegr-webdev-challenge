import React from 'react';
import NewPropertyForm from '../../src/components/NewPropertyForm';

describe('<NewPropertyForm />', () => {
  it('renders form correctly', () => {
    cy.mount(<NewPropertyForm />);

    cy.get('#title').should('to.be.empty');
    cy.get('#area').should('to.be.empty');
    cy.get('#price').should('to.be.empty');
    cy.get('#type').should('to.be', 'Please Provide Type');
    cy.get('#description').should('to.be.empty');

    cy.get(':nth-child(1) > [data-testid="inputFieldInformation-info"]').should('be.visible');
  });

  it('renders errors when not all required fields are populated', () => {
    cy.mount(<NewPropertyForm />);
    cy.get('#price').type('123');
    cy.get('.chakra-button').click();
    cy.get(':nth-child(1) > [data-testid="inputFieldInformation-info"]').should('not.exist');
    cy.get(':nth-child(1) > [data-testid="inputFieldInformation-invalid"]').should('be.visible');
  });

  it('Submits form correctly and form resets', () => {
    cy.intercept('GET', '/places?input=Ath', { fixture: 'places.json' }).as('getPlaces');
    cy.intercept('POST', '/property').as('postProerty');
    cy.mount(<NewPropertyForm />);

    cy.get('#title').type('Title');
    cy.get('#area').type('Ath');
    cy.wait('@getPlaces');

    // Click on one the first option and verify correct value
    cy.get('[data-testid="places-container"] > :nth-child(1)').click();
    cy.get('#area').should('to.be', 'Athina - Attiki');

    cy.get('#price').type('123');
    cy.get('#type').select('Buy');
    cy.get('#description').type('123');

    cy.get('.chakra-button').click();
    cy.wait('@postProerty');

    cy.get('#title').should('to.be.empty');
    cy.get('#area').should('to.be.empty');
    cy.get('#price').should('to.be.empty');
    cy.get('#type').should('to.be', 'Please Provide Type');
    cy.get('#description').should('to.be.empty');
  });
});

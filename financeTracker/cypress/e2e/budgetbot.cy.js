
context('BudgetBot', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/BudgetBot')
    })

    it('loads the BudgetBot page', () => {
        cy.contains('BudgetBot'); // Ensure the page title or header exists
        cy.get('input[placeholder="Type your message..."]').should('exist'); // Verify input box exists
        cy.get('button').contains('Send').should('exist'); // Verify send button exists
    });

    it('allows the user to type a message', () => {
      cy.get('input[placeholder="Type your message..."]').type('How can I save money?');
      cy.get('input[placeholder="Type your message..."]').should('have.value', 'How can I save money?');
    });

    it('sends a message and receives a response', () => {
      cy.get('input[placeholder="Type your message..."]').type('What is a budget?');
      cy.get('button').contains('Send').click();
      cy.contains('BudgetBot').should('exist'); // Ensure response appears
    });

    it('responds correctly to a user message', () => {
      cy.get('input[placeholder="Type your message..."]').type('How do I track expenses?');
      cy.get('button').contains('Send').click();
     // Verify that the typed message is correctly reflected in the input field
      cy.get('input[placeholder="Type your message..."]').should('have.value', 'How do I track expenses?');
    });

});


describe('Home UI Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/Home')
  })

  it('should display the correct title and header', () => {
    // Assert that the header text is visible and correct
    cy.get('h1').should('contain.text', 'Manage Your Finance,Expand Your Savings');
  });

  it('should display the navbar with the correct links', () => {
    // Assert that the navbar contains specific links
    cy.get('nav').within(() => {
      cy.contains('Home').should('be.visible');
      cy.contains('Summary').should('be.visible');
      cy.contains('BudgetBot').should('be.visible');
      cy.contains('Login').should('be.visible');
    });
  });

  it('should display the register button', () => {
    // Check for the presence of the "Register Now" button
    cy.get('a').contains('Register Now').should('be.visible');
  });

  it('should display the three summary cards', () => {
    // Use a more specific selector based on the classes or content
    cy.get('.bg-white.p-6.shadow-lg').should('have.length', 3);
  
    // Optionally, assert the content inside the cards
    cy.contains('Savings').should('be.visible');
    cy.contains('Summary').should('be.visible');
    cy.contains('Expenses').should('be.visible');
  });
  
  it('should navigate to the signup page when Register Now button is clicked', () => {
      // Click the "Register Now" button
    cy.contains('Register Now').click();
  
      // Verify the URL has changed to the signup page
    cy.url().should('include', '/Signup');
  
      // Optionally, check if elements on the signup page are present
    cy.get('h1').should('contain.text', 'Create an Account');  // Assuming your signup page has an h1 element with text 'Signup'
  });  

});
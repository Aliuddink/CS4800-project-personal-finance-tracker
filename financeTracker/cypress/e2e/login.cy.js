
context('Login Page', () => {
    beforeEach(() => {
        // Visit the login page before each test
        cy.visit('http://localhost:5173/login');  // Update the URL if it's different
    });
  
    it('should display the login form correctly', () => {
        // Check that the login form elements are visible
        cy.contains('Login').should('be.visible');  // Login header
        cy.get('input[placeholder="Username"]').should('be.visible');  // Username input
        cy.get('input[placeholder="Password"]').should('be.visible');  // Password input
        cy.contains('Login').should('be.visible');  // Login button
    });
  
    it('should allow a user to type in the username and password fields', () => {
        // Type into the username and password fields
        cy.get('input[placeholder="Username"]').type('testuser');
        cy.get('input[placeholder="Password"]').type('password123');
  
        // Verify that the typed text is present
        cy.get('input[placeholder="Username"]').should('have.value', 'testuser');
        cy.get('input[placeholder="Password"]').should('have.value', 'password123');
    });
  
    it('goes to SignUp page when Join Now button is clicked', () => {
        cy.contains('Join Now').click();
        cy.url().should('include', '/signup')
    });
  
  
  });
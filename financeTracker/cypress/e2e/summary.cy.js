

context('Summary', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/Summary')
    })

    it('should display the current month\'s expenses and savings correctly', () => {
        cy.contains('This month\'s expenses').should('be.visible');
        cy.contains('Savings:').should('be.visible');
    });

    it('should display the earnings/expenses monthly comparison graph placeholder', () => {
        cy.contains('Earnings/Expenses Monthly Comparison').should('be.visible');
        cy.contains('...Insert graph here').should('be.visible');
    });

    it('should display the expenses breakdown table placeholder', () => {
        cy.contains('Expenses Breakdown:').should('be.visible');
        cy.contains('...Insert table here').should('be.visible');
    });


    // it('should allow editing expenses and savings via the edit icon', () => {
    //     cy.get('[alt="Edit Expenses"]').click();  // Replace with actual selector for edit icon
    //     cy.get('[alt="Edit Savings"]').click();  // Replace with actual selector for edit icon
    // });


    it('goes to Home page when Home button is clicked', () => {
        cy.contains('Home').click();
  
        // Verify the URL has changed to the signup page
        cy.url().should('include', '/home');
    
        // Optionally, check if elements on the signup page are present
        cy.get('h1').should('contain.text', 'Manage Your Finance,Expand Your Savings');
    });

    it('goes to Summary page when Summary button is clicked', () => {
        cy.contains('Summary').click();
        cy.url().should('include', '/Summary#')
    });

    // it('goes to BudgetBot page when BudgetBot button is clicked', () => {
    //     cy.contains('BudgetBot').click();
    //     cy.url().should('include', '/BudgetBot')
    // });

    it('goes to Setting page when Setting button is clicked', () => {
        cy.contains('Setting').click();
        cy.url().should('include', '/personal-Info')
        cy.contains('Edit Profile').should('be.visible');
        cy.get('h1').should('contain.text', 'Name');
    });

  }); 
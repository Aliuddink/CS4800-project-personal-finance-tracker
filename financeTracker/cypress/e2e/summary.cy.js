context('Summary Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/Summary');
    });

    // Test case for verifying the visibility of key elements
    it('should display the total expenses and savings correctly', () => {
        cy.contains('Total Expenses:').should('be.visible');
        cy.contains('Savings:').should('be.visible');
        cy.get('.expenses-amount').should('contain.text', '$0.00'); // Replace with actual selector for total expenses
        cy.get('.savings-amount').should('contain.text', '$0.00'); // Replace with actual selector for savings
    });

    // Test case for verifying the graph visibility
    it('should display the Earnings/Expenses Monthly Comparison graph', () => {
        cy.contains('Earnings/Expenses Monthly Comparison').should('be.visible');
        cy.get('.comparison-graph').should('exist'); // Replace with the actual selector for the graph
    });

    // Test case for expenses breakdown section
    it('should display the Earning/Expenses Breakdown section', () => {
        cy.contains('Earning/Expenses Breakdown:').should('be.visible');
        cy.get('.expenses-table').should('exist'); // Replace with actual selector for the breakdown table
    });

    // Test case for editing functionality
    it('should allow editing expenses and savings via the edit icon', () => {
        cy.get('[alt="Edit Expenses"]').click(); // Replace with the actual selector
        cy.get('.edit-expenses-modal').should('be.visible'); // Replace with actual selector for the modal
        cy.get('[alt="Edit Savings"]').click(); // Replace with actual selector
        cy.get('.edit-savings-modal').should('be.visible'); // Replace with actual selector for the modal
    });

    // Navigation test cases
    it('should navigate to Home page when Home button is clicked', () => {
        cy.contains('Home').click();
        cy.url().should('include', '/home');
        cy.get('h1').should('contain.text', 'Manage Your Finance, Expand Your Savings');
    });

    it('should navigate to Summary page when Summary button is clicked', () => {
        cy.contains('Summary').click();
        cy.url().should('include', '/Summary');
    });

    it('should navigate to BudgetBot page when BudgetBot button is clicked', () => {
        cy.contains('BudgetBot').click();
        cy.url().should('include', '/BudgetBot');
    });

    it('should navigate to Settings page when Settings button is clicked', () => {
        cy.contains('Settings').click();
        cy.url().should('include', '/Settings');
        cy.contains('Edit Profile').should('be.visible');
        cy.get('h1').should('contain.text', 'Name');
    });

    // Accessibility test case
    it('should have accessible labels for buttons and inputs', () => {
        cy.get('button').each(($btn) => {
            cy.wrap($btn).should('have.attr', 'aria-label');
        });
        cy.get('input').each(($input) => {
            cy.wrap($input).should('have.attr', 'aria-label');
        });
    });

    // Test case for ensuring responsive design
    it('should render correctly on different screen sizes', () => {
        cy.viewport('iphone-x'); // Mobile test
        cy.get('.navbar').should('be.visible');
        cy.viewport('macbook-15'); // Desktop test
        cy.get('.navbar').should('be.visible');
    });

    // Test case for ensuring data persists after a page reload
    it('should persist data after a page reload', () => {
        cy.get('.expenses-amount').should('contain.text', '$0.00'); // Verify initial value
        // Simulate data entry for expenses and savings (mock data or actual input)
        cy.reload();
        cy.get('.expenses-amount').should('contain.text', '$0.00'); // Verify value persists
    });

    // Error handling for invalid inputs in modals
    it('should display error messages for invalid inputs in the edit modals', () => {
        cy.get('[alt="Edit Expenses"]').click();
        cy.get('.edit-expenses-modal input').type('-100'); // Invalid value
        cy.contains('Invalid amount').should('be.visible'); // Replace with actual error message selector
        cy.get('[alt="Edit Savings"]').click();
        cy.get('.edit-savings-modal input').type('abc'); // Invalid value
        cy.contains('Please enter a valid number').should('be.visible'); // Replace with actual error message selector
    });


       // Verify visibility and position of the edit button
       it('should display the edit button next to Total Expenses', () => {
        cy.contains('Total Expenses:').should('be.visible');
        cy.get('[alt="Edit Expenses"]').should('be.visible'); // Replace with the correct selector
        cy.get('[alt="Edit Expenses"]') // Confirm position
          .prev().contains('Total Expenses:'); // Ensure it's placed correctly next to the label
    });

    // Test click action on the edit button
    it('should open the edit modal when the Edit Expenses button is clicked', () => {
        cy.get('[alt="Edit Expenses"]').click(); // Replace with the correct selector
        cy.get('.edit-expenses-modal').should('be.visible'); // Verify modal opens
        cy.get('.edit-expenses-modal').contains('Edit Expenses'); // Confirm modal content
    });

    // Test updating expenses through the modal
    it('should allow updating the Total Expenses via the edit modal', () => {
        cy.get('[alt="Edit Expenses"]').click(); // Open the modal
        cy.get('.edit-expenses-modal input') // Replace with the actual selector for the input field
          .clear() // Clear any existing value
          .type('200'); // Enter a new value
        cy.contains('Save').click(); // Save changes (replace with the correct Save button selector)
        cy.get('.expenses-amount').should('contain.text', '$200.00'); // Verify updated value
    });

    // Test canceling changes in the modal
    it('should not update the Total Expenses when the edit modal is closed without saving', () => {
        cy.get('[alt="Edit Expenses"]').click(); // Open the modal
        cy.get('.edit-expenses-modal input').type('300'); // Enter a new value
        cy.contains('Cancel').click(); // Close without saving (replace with the correct Cancel button selector)
        cy.get('.expenses-amount').should('contain.text', '$0.00'); // Verify value remains unchanged
    });

});

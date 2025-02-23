describe('Login Test with Custom Command', () => {
    it('Should succesfully login with custom command', () => {
        
cy.login('standard_user', 'secret_sauce');
cy.url().should('include', '/inventory.html');
    });
});
describe('Búsqueda de tarea', () => { 
    it('Buscar la tarea Cocinar', () => {
        
        cy.visit('localhost:3000');

        cy.get('#search')
            .type('Cocinar')

        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .get('.CardTitle')
            .should('have.text', 'Cocinar')
    });
});
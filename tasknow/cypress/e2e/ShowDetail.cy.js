describe('Visualizar información', () => {
    
    it('Muestra los detalles de una tarea', () => {
        
        cy.visit('localhost:3000');

        // Expandir la Primera tarea
        cy.get('.List > .Lists-Cards > .Card')
            .first()
            .click()
        
        // Verificar que los detalles son visibles
        cy.get('.CardTitle')
            .first()
            .should('be.visible')
            .get('.CardDescripcion')
            .should('be.visible')
            .get('.CardVencimiento')
            .first()
            .should('be.visible')
    });
});
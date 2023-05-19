describe('Visualizar información', () => {
    
    it('Muestra los detalles de una tarea', () => {
        
        cy.visit('localhost:3000');

        cy.get('#email').type('test@user.com');
        cy.get('#password').type('asdf');
        cy.get('.MuiButtonBase-root').click()

        cy.get('.Toggle-Add-Card').first().click();
        cy.get('.Edit-Card-Textarea').type("Título muy bueno");
        cy.get('.Edit-Card-Description').first().type("Descripcion muy detallada");
        cy.get('.Edit-Card-Description').last().type("Usuarios muy responsables");
        cy.get('.Edit-Button').click();

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
            .get('.TaskUserAsignado')
            .first()
            .should('be.visible')
    });
});
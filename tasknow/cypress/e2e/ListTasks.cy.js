describe('Listar tareas', () => { 
    it('Verifica que se encuentran las 2 tareas iniciales', () => {

        cy.visit('localhost:3000');

        cy.get('.List > .Lists-Cards > .Card')
            .should('have.lengthOf', 2)

    });
    
});